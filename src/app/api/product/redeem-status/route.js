import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/services/firebaseinit";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const params = new URL(req.url);
    const productId = params.searchParams.get("productId");
    const { user } = await getServerSession(authOptions);

    if (!productId) {
      throw new Error("Product ID is required");
    }

    if (!user) {
      throw new Error("Unauthorized");
    }

    const userId = user.id;

    const orderRef = collection(db, "orders");
    const orderQuery = query(
      orderRef,
      where("product.id", "==", productId),
      where("placedBy.id", "==", userId)
    );

    const order = await getDocs(orderQuery);

    if (!order.empty) {
      return NextResponse.json(
        {
          status: 200,
          message: "Order found",
          data: true,
        },
        {
          status: 200,
        }
      );
    }

    return NextResponse.json(
      {
        status: 200,
        message: "Order not found",
        data: false,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 400,
        message: error.message,
        data: null,
      },
      {
        status: 400,
      }
    );
  }
}
