"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SyntheticEvent } from "react"; // Import SyntheticEvent

import {
  FormLabel,
  Form,
  FormInput,
  FormGroup,
  Reminder,
  ForgotPassword,
  Submit,
  KeepLogin,
  KeepLoginText,
} from "./styled";

interface CredentialsFormProps {
  csrfToken?: string;
}

export default function CredentialsForm() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>電子郵件</FormLabel>
        <FormInput
          type="text"
          value={userInfo.email}
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, email: target.value });
          }}
          required
        />
      </FormGroup>
      <Reminder>請輸入您用於預訂時的電子郵件</Reminder>
      <FormGroup>
        <FormLabel>密碼</FormLabel>
        <FormInput
          type="password"
          value={userInfo.password}
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, password: target.value });
          }}
          required
        />
      </FormGroup>
      <ForgotPassword>忘記密碼</ForgotPassword>
      <KeepLogin>
        <img src="Mask.svg"></img>
        <KeepLoginText>保持登入</KeepLoginText>
      </KeepLogin>
      <Submit type="submit">登入</Submit>
    </Form>
  );
}
