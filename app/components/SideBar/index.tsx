"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { ProfileImage, Button, SideBarContainer } from "./styled";
import { useRouter } from "next/navigation";

interface Prop {
  username: string;
}

const SideBar = ({ username }: Prop) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <SideBarContainer>
      <ProfileImage>{username}</ProfileImage>
      <Button>我的訂單</Button>
      <Button>個人資料</Button>
      <Button>收藏清單</Button>
      <Button>我的評論</Button>
      <Button onClick={() => handleSignOut()}>登出</Button>
    </SideBarContainer>
  );
};

export default SideBar;
