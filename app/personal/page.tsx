"use client"
import { authConfig, loginIsRequiredServer } from "@/app/lib/auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation"; 

export default function Page() {
    //   await loginIsRequiredServer();
    const { data: session } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' }); 
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