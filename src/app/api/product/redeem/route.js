import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { collection, doc, runTransaction } from "firebase/firestore";
import { db } from "@/services/firebaseinit";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("Unauthorized");
    }

    const userId = user.id;
    const url = new URL(req.url);
    const productId = url.searchParams.get("productId");

    if (!productId) {
      throw new Error("Product ID is required");
    }

    await runTransaction(db, async (transaction) => {
      // Check if product exists
      const productRef = doc(db, "products", productId);
      const productDoc = await transaction.get(productRef);

      if (!productDoc.exists()) {
        throw new Error("Product not found");
      }

      const productData = productDoc.data();

      // check quantity of product

      if (parseInt(productData.quantity) === 0) {
        throw new Error("Product out of stock");
      }

      // Check if user has enough coins
      const userRef = doc(db, "users", userId);
      const userDoc = await transaction.get(userRef);

      if (!userDoc.exists()) {
        throw new Error("User not found");
      }

      const userData = userDoc.data();
      const userCoins = parseInt(userData.coins);
      const productPrice = parseInt(productData.price);

      if (userCoins < productPrice) {
        throw new Error("Insufficient coins");
      }

      // Deduct coins
      const newCoins = userCoins - productPrice;
      transaction.update(userRef, {
        coins: newCoins.toString(),
      });

      // update product quantity

      transaction.update(productRef, {
        quantity: (parseInt(productData.quantity) - 1).toString(),
      });

      // Create order
      const orderRef = collection(db, "orders");
      transaction.set(doc(orderRef), {
        placedBy: {
          id: userId,
          name: userData.name,
          email: userData.email,
        },
        product: {
          id: productId,
          name: productData.name,
          price: productData.price,
          image: productData.image,
        },
        status: "deliver",
        createdAt: new Date().toISOString(),
      });
    });

    return NextResponse.json(
      {
        status: "SUCCESS",
        message: "Product redeemed and order placed successfully",
        data: null,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "ERROR",
        message: error.message,
        data: null,
      },
      { status: 400 }
    );
  }
}
