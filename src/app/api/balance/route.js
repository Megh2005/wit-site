import { db } from "@/services/firebaseinit";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { ApiResponse } from "@/utils/Response";

export async function GET() {
  try {
    const { user: sessionUser } = await getServerSession(authOptions);

    if (!sessionUser) {
      throw new Error("User not found");
    }

    const user = await getDoc(doc(db, "users", sessionUser.id));

    if (!user.exists()) {
      throw new Error("No such user exists");
    }

    return NextResponse.json(
      new ApiResponse(200, "Balance", user.data().coins),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
