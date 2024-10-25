import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import { doc, getDoc, runTransaction, setDoc } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("Unauthorized");
    }

    const url = new URL(req.url);
    const quizName = url.pathname.split("/").pop();

    const quizRef = doc(db, "quizzes", quizName);
    const quiz = await getDoc(quizRef);

    if (!quiz.exists()) {
      throw new Error("Quiz not found");
    }

    if (!quiz.data().active) {
      return NextResponse.json(
        new ApiResponse(200, "Quiz has been closed", null),
        { status: 200 }
      );
    }

    const isQuizAlreadySubmitted = await getDoc(
      doc(db, `${quizName}-submissions`, user.id)
    );

    if (isQuizAlreadySubmitted.exists()) {
      return NextResponse.json(
        new ApiResponse(
          200,
          "You have attempted the current quiz. Stay tuned for the upcoming ones",
          {
            result: isQuizAlreadySubmitted.data(),
            submitted: true,
          }
        ),
        { status: 200 }
      );
    }

    return NextResponse.json(
      new ApiResponse(200, "Quiz fetched", {
        quiz: quiz.data(),
        submitted: false,
      }),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}

export async function POST(req) {
  try {
    const { user } = await getServerSession(authOptions);

    if (!user) {
      throw new Error("Unauthorized");
    }

    const url = new URL(req.url);
    const quizName = url.pathname.split("/").pop();
    const submissionData = await req.json();

    const quizRef = doc(db, "quizzes", quizName);
    const quiz = await getDoc(quizRef);

    if (!quiz.exists()) {
      throw new Error("Quiz not found");
    }

    if (!quiz.data().active) {
      throw new Error("Quiz has been closed");
    }

    const isQuizAlreadySubmitted = await getDoc(
      doc(db, `${quizName}-submissions`, user.id)
    );

    if (isQuizAlreadySubmitted.exists()) {
      throw new Error("Quiz already submitted");
    }

    // TODO: based on the submission data calculate the coins to reward

    // Run transaction
    await runTransaction(db, async (transaction) => {
      const userRef = doc(db, "users", user.id);
      const userDoc = await transaction.get(userRef);

      if (!userDoc.exists()) {
        throw new Error("User not found");
      }

      const userData = userDoc.data();

      transaction.update(userRef, {
        coins: (
          parseInt(userData.coins) +
          submissionData.correct_answers * 100
        ).toString(),
      });

      const submissionRef = doc(db, `${quizName}-submissions`, user.id);
      transaction.set(submissionRef, {
        ...submissionData,
        userId: user.id,
      });
    });

    return NextResponse.json(new ApiResponse(200, "Quiz submitted", null), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(new ApiResponse(400, error.message, null), {
      status: 400,
    });
  }
}
