import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { user: sessionUser } = await getServerSession(authOptions);

    if (!sessionUser) {
      throw new Error("User not found");
    }

    const aiGamesRef = collection(db, "aigamedata");
    const q = query(aiGamesRef, where("userId", "==", sessionUser.id));
    const result = await getDocs(q);

    if (!result.empty) {
      return NextResponse.json(
        new ApiResponse(400, "You have already played this game", null),
        { status: 200 }
      );
    }

    return NextResponse.json(
      new ApiResponse(200, "Game not played yet", null),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
