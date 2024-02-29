"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Wrapper, Background } from "./styled";
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
        <SideBar />
        <Profile />
      </Wrapper>
    </Background>
  );
  //   return (
  //     <div className="flex gap-4 ml-auto">
  //       <p className="text-sky-600">{session?.user?.name}</p>
  //       <button onClick={() => handleSignOut()} className="text-red-600">
  //         Sign Out
  //       </button>
  //     </div>
  //   );
}
