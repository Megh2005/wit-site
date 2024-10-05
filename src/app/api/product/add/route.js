import { db } from "@/services/firebaseinit";
import { uploadToCloudinary } from "@/utils/cloudinary";
import { ApiResponse } from "@/utils/Response";
import { doc, runTransaction } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const price = formData.get("price");
    const quantity = formData.get("quantity");
    const image = formData.get("image");

    if (!name || !price || !quantity || !image) {
      throw new Error("All fields are required");
    }

    const fileBuffer = await image.arrayBuffer();

    const mimeType = image.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");

    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

    await runTransaction(db, async (transaction) => {
      const res = await uploadToCloudinary(
        fileUri,
        image.name,
        "product-images"
      );

      if (!res) {
        throw new Error("Failed to upload image");
      }

      const imageUrl = res.secure_url;

      transaction.set(doc(db, "products", Date.now().toString()), {
        name,
        price,
        image: imageUrl,
        quantity,
      });
    });

    return NextResponse.json(
      new ApiResponse(200, "Product added successfully", null),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
