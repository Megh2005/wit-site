import { db } from "@/services/firebaseinit";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const productRef = collection(db, "products");
    const products = await getDocs(productRef);

    const data = products.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return NextResponse.json(
      {
        status: "SUCCESS",
        message: "Products fetched successfully",
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
