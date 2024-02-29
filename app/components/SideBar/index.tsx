"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { ProfileImage, Button, SideBarContainer } from "./styled";
<<<<<<< HEAD

interface Prop {
  username: string;
}

const SideBar = ({ username }: Prop) => {
=======
import { useRouter } from "next/navigation";

const SideBar = () => {
  const { data: session } = useSession();
  const router = useRouter();

>>>>>>> 5e91dc5 (feature:account_profile)
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <SideBarContainer>
<<<<<<< HEAD
      <ProfileImage>{username}</ProfileImage>
=======
      <ProfileImage>名字</ProfileImage>
>>>>>>> 5e91dc5 (feature:account_profile)
      <Button>我的訂單</Button>
      <Button>個人資料</Button>
      <Button>收藏清單</Button>
      <Button>我的評論</Button>
      <Button onClick={() => handleSignOut()}>登出</Button>
    </SideBarContainer>
  );
};

export default SideBar;
