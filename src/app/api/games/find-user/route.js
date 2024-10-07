import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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

    // check if already transferred
    const transactionRef = collection(db, "transactions");
    let finalUsers = [...randomUsers];

    for (const r_user of randomUsers) {
      const q = query(
        transactionRef,
        where("sender", "==", user.id),
        where("receiver", "==", r_user.id)
      );
      const results = await getDocs(q);

      // If there are results, it means the user has already transferred to r_user
      if (!results.empty) {
        finalUsers = finalUsers.filter((u) => u.id !== r_user.id);
      }
    }

    return NextResponse.json(new ApiResponse(200, "Users found", finalUsers), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
