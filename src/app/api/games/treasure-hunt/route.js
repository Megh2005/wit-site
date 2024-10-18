import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import { collection, getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET(req) {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("Unauthorized");
    }

    const treasureHuntRef = collection(db, "treasure-hunt");

    const treasureHunt = await getDocs(treasureHuntRef);

    const data = treasureHunt.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return NextResponse.json(
      new ApiResponse(200, "Treasure Hunt fetched", data),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
