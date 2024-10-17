import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const slug = url.pathname.split("/").pop();

    const treasureHuntRef = collection(db, "treasure-hunt");
    const q = query(treasureHuntRef, where("slug", "==", slug));

    const treasureHunt = await getDocs(q);

    if (treasureHunt.empty) {
      throw new Error("Treasure Hunt not found");
    }

    const data = treasureHunt.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    const userRef = await getDoc(doc(db, "users", data[0].volunteer));
    const huntData = {
      ...data[0],
      volunteer: {
        id: userRef.id,
        ...userRef.data(),
      },
    };

    return NextResponse.json(
      new ApiResponse(200, "Hunt Data fetched", huntData),
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}

export async function POST(req) {
  try {
    const { huntId } = await req.json();

    await updateDoc(doc(db, "treasure-hunt", huntId), {
      status: "closed",
    });

    return NextResponse.json(
      new ApiResponse(200, "Hunt closed successfully", null),
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
