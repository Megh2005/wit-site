import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/services/firebaseinit";
import { ApiResponse } from "@/utils/Response";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
        new ApiResponse(200, "You have already submitted this quiz", null),
        { status: 200 }
      );
    }

    return NextResponse.json(
      new ApiResponse(200, "Quiz fetched", quiz.data()),
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

    const submissionRef = doc(db, `${quizName}-submissions`, user.id);
    await setDoc(submissionRef, {
      ...submissionData,
      userId: user.id,
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
