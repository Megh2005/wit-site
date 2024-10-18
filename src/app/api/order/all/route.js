import { db } from "@/services/firebaseinit";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET(req) {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("Unauthorized");
    }

    const url = new URL(req.url);
    const pageParam = url.searchParams.get("pageParam") || null; // This is a serialized value (e.g., 'name')
    const pageLimit = 15;
    const searchQuery = url.searchParams.get("q") || "";

    const orderRef = collection(db, "orders");
    let q;

    const isSearchQueryPresent = searchQuery.trim().length > 0;

    if (pageParam) {
      const lastDocSnap = await getDoc(doc(db, "orders", pageParam));

      if (lastDocSnap.exists()) {
        q = isSearchQueryPresent
          ? query(
              orderRef,
              where("placedBy.email", ">=", searchQuery),
              where("placedBy.email", "<=", searchQuery + "\uf8ff"),
              orderBy("placedBy.name", "asc"),
              startAfter(lastDocSnap),
              limit(pageLimit)
            )
          : query(
              orderRef,
              orderBy("placedBy.name", "asc"),
              startAfter(lastDocSnap),
              limit(pageLimit)
            );
      } else {
        q = isSearchQueryPresent
          ? query(
              orderRef,
              where("placedBy.email", ">=", searchQuery),
              where("placedBy.email", "<=", searchQuery + "\uf8ff"),
              orderBy("placedBy.name", "asc"),
              limit(pageLimit)
            )
          : query(orderRef, orderBy("placedBy.name", "asc"), limit(pageLimit));
      }
    } else {
      q = isSearchQueryPresent
        ? query(
            orderRef,
            where("placedBy.email", ">=", searchQuery),
            where("placedBy.email", "<=", searchQuery + "\uf8ff"),
            orderBy("placedBy.name", "asc"),
            limit(pageLimit)
          )
        : query(orderRef, orderBy("placedBy.name", "asc"), limit(pageLimit));
    }

    const ordersSnapshot = await getDocs(q);

    const data = ordersSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    const lastDoc =
      ordersSnapshot.docs.length > 0
        ? ordersSnapshot.docs[ordersSnapshot.docs.length - 1].id
        : null;

    return NextResponse.json(
      {
        status: "SUCCESS",
        message: "Orders fetched successfully",
        data: { data, lastDoc },
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
