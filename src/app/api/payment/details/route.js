import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import { doc, getDoc } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  const params = new URL(req.url);
  const id = params.searchParams.get("sendTo");
  const { user: sessionUser } = await getServerSession(authOptions);

  if (sessionUser.id == id) {
    return NextResponse.json(new ApiResponse(400, "Invalid User", null), {
      status: 400,
    });
  }

  try {
    const userRef = doc(db, "users", id);
    const user = await getDoc(userRef);

    if (user.exists()) {
      const { name, email, role, contactNumber } = user.data();

      return NextResponse.json(
        new ApiResponse(200, "User details fetched", {
          name,
          email,
          role,
          contactNumber,
        }),
        { status: 200 }
      );
    }

    return NextResponse.json(new ApiResponse(404, "No user found", null), {
      status: 404,
    });
  } catch (error) {
    return NextResponse.json(new ApiResponse(500, error.message, null), {
      status: 500,
    });
  }
}
