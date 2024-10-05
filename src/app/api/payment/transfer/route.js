import { db } from "@/services/firebaseinit";
import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { sender, receiver, amount } = await req.json();

  try {
    if (!sender || !receiver || !amount) {
      throw new Error("Sender, receiver, and amount are required");
    }

    if (amount > 2000) {
      throw new Error("Cannot transfer more than 2000 coins");
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

      // Check if sender has enough coins
      if (parseInt(senderCoins) < amount) {
        throw new Error("Insufficient coins");
      }

      // Check if transaction already made

      const transactionRef = collection(db, "transactions");
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
      transaction.set(doc(db, "transactions", Date.now().toString()), {
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
