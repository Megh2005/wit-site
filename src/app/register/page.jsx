"use client";

import React, { useState } from "react";

const SignupForm = () => {
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
      background: "#000",
    },
    wrapper: {
      width: "90%",
      maxWidth: "420px",
      background: "transparent",
      border: "2px solid rgba(255, 255, 255, 0.2)",
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
      background: "transparent",
      outline: "none",
      border: "2px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "40px",
      fontSize: "14px",
      color: "#fff",
      padding: "20px 45px 20px 20px",
    },
    select: {
      width: "100%",
      height: "100%",
      background: "transparent",
      outline: "none",
      border: "2px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "40px",
      fontSize: "14px",
      color: "#fff",
      padding: "15px 20px",
      appearance: "none",
    },
    btn: {
      width: "100%",
      height: "45px",
      background: "#fff",
      border: "none",
      outline: "none",
      borderRadius: "40px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      fontSize: "16px",
      color: "#333",
      fontWeight: 600,
    },
    registerLink: {
      fontSize: "14px",
      textAlign: "center",
      margin: "20px 0 15px",
    },
    a: {
      color: "#fff",
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
  };

  const [role, setRole] = useState("");

  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <form>
          <h1 style={styles.h1}>
            <span style={{ color: "#00BFFF", fontWeight: "800" }}>
              Welcome To <br />
            </span>
            <span style={{ color: "#FF0000", fontWeight: "800" }}>কলকাতা</span>
            <hr />
            <span
              style={{
                color: "#FFFFFF",
                fontWeight: "800",
                textDecoration: "underline",
              }}
            >
              Sign Up
            </span>
          </h1>
          <div style={styles.inputBox}>
            <input
              type="text"
              placeholder="Name"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputBox}>
            <input
              type="email"
              placeholder="Email Address"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputBox}>
            <input
              type="number"
              maxLength={10}
              minLength={10}
              min={0}
              max={9999999999}
              placeholder="Contact Number"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              required
              style={styles.input}
            />
          </div>
          {/* Role Dropdown */}
          <div style={styles.inputBox}>
            <select
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.select}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option className="text-black font-bold" value="attendee">Attendee</option>
              <option className="text-black font-bold" value="sponsor">Sponsor</option>
              <option className="text-black font-bold" value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            style={{
              ...styles.btn,
              transition:
                "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#708090";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#333";
            }}
          >
            Register User
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
