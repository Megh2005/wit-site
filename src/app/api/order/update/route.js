import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { doc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "@/services/firebaseinit";

export async function POST(req) {
  try {
    const url = new URL(req.url);
    const orderId = url.searchParams.get("oid");

    if (!orderId) {
      throw new Error("Order ID is required");
    }

    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("User not found");
    }

    if (user.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const orderRef = doc(db, "orders", orderId);
    await updateDoc(orderRef, { status: "delivered" });

    return NextResponse.json(
      {
        status: 200,
        message: "Order updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 400,
        message: error.message,
      },
      { status: 400 }
    );
  }
}
