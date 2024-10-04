"use server";

import { db } from "@/services/firebaseinit";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import bcrypt from "bcryptjs";

export const register = async (credentials) => {
  try {
    const usersRef = collection(db, "users");

    // check if user already exists

    const results = await getDocs(
      query(usersRef, where("email", "==", credentials.email))
    );

    if (!results.empty) {
      const res = {
        status: "ERROR",
        message: "User already exists",
        data: null,
      };
      return res;
    }

    // create user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(credentials.password, salt);

    let coins;

    if (credentials.role === "admin") {
      coins = 100000;
    } else if (credentials.role === "attendee") {
      coins = 1000;
    } else {
      coins = 5000;
    }

    const newUser = {
      ...credentials,
      password: hashedPassword,
      coins,
    };

    const result = await addDoc(usersRef, newUser);

    if (result.id) {
      const res = {
        status: "SUCCESS",
        message: "User registered successfully",
        data: null,
      };
      return res;
    }
  } catch (error) {
    const res = {
      status: "ERROR",
      message: "An error occurred",
      data: null,
    };
    return res;
  }
};
