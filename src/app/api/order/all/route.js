import { db } from "@/services/firebaseinit";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const orderRef = collection(db, "orders");
    const orders = await getDocs(orderRef);

    const data = orders.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return NextResponse.json(
      {
        status: "SUCCESS",
        message: "Orders fetched successfully",
        data,
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
