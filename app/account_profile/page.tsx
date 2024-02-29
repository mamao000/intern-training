"use client";
<<<<<<< HEAD
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Wrapper, Background } from "./styled";
import { useEffect } from "react";
=======
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Wrapper, Background } from "./styled";
>>>>>>> 5e91dc5 (feature:account_profile)
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
<<<<<<< HEAD
        <SideBar username={session?.user?.name ?? "Guest"} />
=======
        <SideBar />
>>>>>>> 5e91dc5 (feature:account_profile)
        <Profile />
      </Wrapper>
    </Background>
  );
<<<<<<< HEAD
=======
  //   return (
  //     <div className="flex gap-4 ml-auto">
  //       <p className="text-sky-600">{session?.user?.name}</p>
  //       <button onClick={() => handleSignOut()} className="text-red-600">
  //         Sign Out
  //       </button>
  //     </div>
  //   );
>>>>>>> 5e91dc5 (feature:account_profile)
}
