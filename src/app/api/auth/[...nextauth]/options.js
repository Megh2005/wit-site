import CredentialsProvider from "next-auth/providers/credentials";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/services/firebaseinit";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const usersRef = collection(db, "users");

          const results = await getDocs(
            query(usersRef, where("email", "==", credentials.email))
          );

          if (results.empty) {
            throw new Error("No user found");
          }

          const user = results.docs[0].data();
          const userId = results.docs[0].id;

          const isPasswordMatch = user.password === credentials.password;

          if (isPasswordMatch) {
            return { id: userId, ...user };
          } else {
            throw new Error("Invalid password");
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id?.toString();
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async signIn({ user }) {
      const currentUser = await getDoc(doc(db, "users", user.id));

      const activeSession = currentUser.data().activeSession;

      if (activeSession) {
        return false;
      } else {
        await updateDoc(doc(db, "users", user.id), {
          activeSession: true,
        });

        return true;
      }
    },
  },
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
};
