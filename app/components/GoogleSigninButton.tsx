"use client";
import styles from "./components.module.css"
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const GoogleSigninButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className={styles.signin_button}
      style={{ position: 'relative',top: '40px', left: '16px' }}
    >
    </button>
  );
};

export default GoogleSigninButton;