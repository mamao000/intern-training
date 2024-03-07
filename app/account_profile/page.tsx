"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Wrapper, Background } from "./styled";
import { useEffect } from "react";
import SideBar from "../components/SideBar";
import Profile from "../components/Profile";

export default function Account_Profile() {
  //   await loginIsRequiredServer();
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <Background>
      <Wrapper>
        <SideBar username={session?.user?.name ?? "Guest"} />
        <Profile />
      </Wrapper>
    </Background>
  );
}
