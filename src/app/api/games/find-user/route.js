import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseinit";
import { NextResponse } from "next/server";
import { ApiResponse } from "@/utils/Response";

export async function GET() {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("User not found");
    }

    const findUserRef = doc(db, "findtheuser-gamedata", user.id);

    const result = await getDoc(findUserRef);

    if (!result.exists()) {
      throw new Error("Users not found");
    }

    const randomUsers = result.data().randomUsers;

    return NextResponse.json(new ApiResponse(200, "Users found", randomUsers), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
