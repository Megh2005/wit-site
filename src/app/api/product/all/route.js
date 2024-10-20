import { db } from "@/services/firebaseinit";
import { collection, getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";
import { ApiResponse } from "@/utils/Response";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    const productRef = collection(db, "products");
    const products = await getDocs(productRef);

    const data = products.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return NextResponse.json(new ApiResponse(200, "Products fetched", data), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
