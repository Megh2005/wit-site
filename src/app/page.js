"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const LoginForm = () => {
  const styles = {
    general: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "'Poppins', sans-serif",
    },
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background:
        "url(https://res.cloudinary.com/dmbxx03vp/image/upload/v1726831166/bg_c_oeldnc.png) no-repeat center/cover",
    },
    wrapper: {
      width: "90%",
      maxWidth: "420px",
      background: "transparent",
      border: "2px solid rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(9px)",
      color: "#000",
      borderRadius: "12px",
      padding: "20px",
    },
    h1: {
      fontSize: "28px",
      textAlign: "center",
    },
    inputBox: {
      position: "relative",
      width: "100%",
      height: "50px",
      margin: "20px 0",
    },
    input: {
      width: "100%",
      height: "100%",
      background: "#fff",
      outline: "none",
      border: "2px solid rgba(0, 0, 0, 0.2)",
      borderRadius: "40px",
      fontSize: "14px",
      color: "#000",
      padding: "20px 45px 20px 20px",
    },
    inputPlaceholder: {
      color: "#000",
    },
    btn: {
      width: "100%",
      height: "45px",
      background: "#edde0e",
      border: "none",
      outline: "none",
      borderRadius: "40px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      fontSize: "16px",
      color: "#d13f17",
      fontWeight: 600,
    },
    registerLink: {
      fontSize: "14px",
      textAlign: "center",
      margin: "20px 0 15px",
    },
    a: {
      color: "#000",
      textDecoration: "none",
    },
    aHover: {
      textDecoration: "underline",
    },
    media768: {
      wrapper: {
        padding: "20px",
      },
      h1: {
        fontSize: "24px",
      },
      inputBox: {
        margin: "15px 0",
      },
      input: {
        fontSize: "14px",
      },
      btn: {
        fontSize: "15px",
      },
      registerLink: {
        fontSize: "13px",
      },
    },
    media480: {
      wrapper: {
        padding: "15px",
      },
      h1: {
        fontSize: "20px",
      },
      inputBox: {
        margin: "10px 0",
      },
      input: {
        fontSize: "12px",
        padding: "15px 40px 15px 15px",
      },
      btn: {
        fontSize: "14px",
      },
      registerLink: {
        fontSize: "12px",
      },
    },
    logo: {
      display: "block",
      margin: "0 auto 10px",
      maxWidth: "150px",
    },
  };

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitLoginForm = async () => {
    setSubmitting(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setSubmitting(false);

    if (result?.error) {
      toast.error(result.error);
    }

    if (result?.ok) {
      toast.success("Logged in Successfully");
      router.replace("/home");
    }
  };

  return (
    <div style={styles.body}>
      <h1 className="text-xl text-red-500 font-extrabold text-center">
        PLEASE LOG OUT AND LOG IN AGAIN FOR BETTER MARKETPLACE EXPERIENCE
      </h1>
      <div style={styles.wrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitLoginForm();
          }}
        >
          <img
            src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png"
            alt="Logo"
            style={styles.logo}
          />
          <h1 style={styles.h1}>
            <span style={{ color: "#000", fontWeight: "800" }}>Welcome To</span>
            <br />
            <span style={{ color: "#FF0000", fontWeight: "800" }}>
              WIT Dreamin&apos; Kolkata
            </span>
            <hr width="true" style={{ color: "#000" }} />
          </h1>
          <div style={styles.inputBox}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Registered Email ID"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputBox}>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="number"
              minLength={8}
              maxLength={16}
              placeholder="Registered Mobile Number"
              required
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            className="hover:bg-gray-600 hover:text-white flex justify-center items-center"
            style={{
              ...styles.btn,
              color: "#000",
              fontWeight: "800",
            }}
          >
            {submitting ? (
              <LoaderCircle className="animate-spin text-black w-6 h-6 mr-2" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
