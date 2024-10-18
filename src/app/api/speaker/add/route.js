import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import { addDoc, collection } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(req) {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("Unauthorized");
    }

    const formData = await req.formData();
    const speaker = formData.get("speaker");
    const designation = formData.get("designation");
    const time = formData.get("time");
    const category = formData.get("category");
    const imageUrl = formData.get("imageUrl");
    const linkedinUrl = formData.get("linkedinUrl");
    const twitterUrl = formData.get("twitterUrl");

    if (
      !speaker ||
      !designation ||
      !time ||
      !category ||
      !imageUrl ||
      !linkedinUrl ||
      !twitterUrl
    ) {
      throw new Error("All fields are required");
    }

    console.log(category);

    if (category === "Keynote") {
      const keynoteRef = collection(db, "keynote-speakers");
      await addDoc(keynoteRef, {
        speaker,
        designation,
        time,
        category,
        imageUrl,
        linkedinUrl,
        twitterUrl,
      });
    } else if (category === "Panel") {
      const panelRef = collection(db, "panel-speakers");
      await addDoc(panelRef, {
        speaker,
        designation,
        time,
        category,
        imageUrl,
        linkedinUrl,
        twitterUrl,
      });
    } else {
      const esteemedRef = collection(db, "esteemed-speakers");
      await addDoc(esteemedRef, {
        speaker,
        designation,
        time,
        category,
        imageUrl,
        linkedinUrl,
        twitterUrl,
      });
    }

    return NextResponse.json(
      new ApiResponse(200, "Speaker added successfully", null),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
