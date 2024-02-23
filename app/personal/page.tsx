"use client"
import { authConfig, loginIsRequiredServer } from "@/app/lib/auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/router"; 

export default function Page() {
    //   await loginIsRequiredServer();
    const { data: session } = useSession();

    const handleSignOut = async () => {
        await signOut();
        return redirect("/")
    };

    return (
        <div className="flex gap-4 ml-auto">
            <p className="text-sky-600">{session?.user?.name}</p>
            <button onClick={() => handleSignOut()} className="text-red-600">
            Sign Out
            </button>
        </div>
    );
}