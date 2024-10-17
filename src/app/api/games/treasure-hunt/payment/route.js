import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/services/firebaseinit";
import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  where,
} from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { receiver } = await req.json();
  const { user } = await getServerSession(authOptions);
  const { id: sender } = user;

  try {
    if (!receiver || !user) {
      throw new Error("Receiver is required");
    }

    if (user.role !== "volunteer") {
      throw new Error("Unauthorized");
    }

    if (receiver === sender) {
      throw new Error("Sender and receiver cannot be the same");
    }

    // Run transaction
    await runTransaction(db, async (transaction) => {
      const senderRef = doc(db, "users", sender);
      const receiverRef = doc(db, "users", receiver);

      // Get sender and receiver docs in the transaction
      const senderDoc = await transaction.get(senderRef);
      const receiverDoc = await transaction.get(receiverRef);

      if (!senderDoc.exists()) {
        throw new Error("Sender does not exist");
      }

      if (!receiverDoc.exists()) {
        throw new Error("Receiver does not exist");
      }

      const senderData = senderDoc.data();
      const receiverData = receiverDoc.data();

      const { coins: senderCoins } = senderData;
      const { coins: receiverCoins } = receiverData;

      const amount = senderCoins;

      // Check if sender has enough coins
      if (parseInt(senderCoins) < amount) {
        throw new Error("Insufficient coins");
      }

      // Check if transaction already made

      const transactionRef = collection(db, "treasure-hunt-txns");
      const q = query(
        transactionRef,
        where("sender", "==", sender),
        where("receiver", "==", receiver)
      );
      const transactionDoc = await getDocs(q);

      if (!transactionDoc.empty) {
        throw new Error("Transaction already made");
      }

      // Deduct coins from sender and add to receiver
      const newSenderCoins = parseInt(senderCoins) - amount;
      const newReceiverCoins = parseInt(receiverCoins) + amount;

      // Update both sender and receiver coins in the transaction
      transaction.update(senderRef, { coins: newSenderCoins.toString() });
      transaction.update(receiverRef, { coins: newReceiverCoins.toString() });

      // create a record of the transaction
      transaction.set(doc(db, "treasure-hunt-txns", Date.now().toString()), {
        sender,
        receiver,
        amount,
      });
    });

    return NextResponse.json(
      {
        status: "SUCCESS",
        message: "Coins transferred successfully",
        data: null,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "ERROR",
        message: error.message,
        data: null,
      },
      { status: 400 }
    );
  }
}
