"use client";
import styles from "./components.module.css"
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const GoogleSigninButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className={styles.signin_button}
    >
    <img src="icons8-google.svg"></img>
    使用google登入
    </button>
  );
};

export default GoogleSigninButton;