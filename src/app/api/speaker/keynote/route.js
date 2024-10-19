import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET() {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("Unauthorized");
    }
    const esteemedRef = collection(db, "keynote-speakers");
    const q = query(esteemedRef, orderBy("speaker", "asc"));
    const result = await getDocs(q);

    const data = result.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return NextResponse.json(new ApiResponse(200, "Speakers fetched", data), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
