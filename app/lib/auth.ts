import { NextAuthOptions, User, getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
          name: "Sign in",
          credentials: {
            email: {
              label: "Email",
              type: "email",
              placeholder: "example@example.com",
            },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials) {
            if (!credentials || !credentials.email || !credentials.password)
              return null;
    
            const user = { id: "1", name: "midas", email: "midas.ma@asiayo.com", password: "abcd1234" }
    
            if (user && user.password === credentials.password) {
              return user;
            }
    
            return null;
          },
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
      ]
}

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}