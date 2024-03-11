"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { SignInButton } from "./styled";

const GoogleSigninButton = () => {
  const handleSignIn = () => {
    signIn();
  };
  return (
    <SignInButton onClick={handleSignIn}>
      <img src="icons8-google.svg"></img>
      使用google登入
    </SignInButton>
  );
};

export default GoogleSigninButton;
