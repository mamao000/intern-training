"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { ProfileImage, Button, SideBarContainer } from "./styled";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <SideBarContainer>
      <ProfileImage>名字</ProfileImage>
      <Button>我的訂單</Button>
      <Button>個人資料</Button>
      <Button>收藏清單</Button>
      <Button>我的評論</Button>
      <Button onClick={() => handleSignOut()}>登出</Button>
    </SideBarContainer>
  );
};

export default SideBar;
