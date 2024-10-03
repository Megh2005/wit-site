import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("User not found");
    }

    const { slogan1, slogan2 } = await req.json();

    console.log(slogan1, slogan2);

    const aiGamesRef = collection(db, "aigamedata");

    const data = {
      userId: user.id,
      response1: slogan1,
      response2: slogan2,
    };

    const result = await addDoc(aiGamesRef, data);

    if (!result) {
      throw new Error("Failed to add slogan");
    }

    return NextResponse.json(
      new ApiResponse(200, "Slogan added successfully", null),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
