"use client";
import Image from "next/image";
import styles from "./page.module.css";
import GoogleSigninButton from "./components/GoogleSignInButton";
import EmailSignin from "./components/EmailSignIn";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import {
  Wrapper,
  ImageBlock,
  Container,
  Title,
  Split,
  AccountCheck,
  RegisterNow,
  Service,
  ServiceRegulationBlue,
  Or,
} from "./styled";

export default function Home() {
  const { data: session } = useSession();

  if (session && session.user) {
    return redirect("/personal");
  }
  return (
    <Wrapper>
      <ImageBlock />
      <Container>
        <Title>登入會員</Title>
        <GoogleSigninButton />
        <Split>
          <Or>或</Or>
        </Split>
        <EmailSignin />
        <AccountCheck>
          還沒有帳號嗎？
          <RegisterNow>馬上註冊</RegisterNow>
        </AccountCheck>
        <Service>
          登入即同意 AsiaYo
          <ServiceRegulationBlue>服務條款</ServiceRegulationBlue>與
          <ServiceRegulationBlue>隱私政策</ServiceRegulationBlue>
        </Service>
      </Container>
    </Wrapper>
  );
}
