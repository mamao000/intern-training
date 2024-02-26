'use client';
import Image from "next/image";
import styles from "./page.module.css";
import GoogleSigninButton from "./components/GoogleSigninButton";
import EmailSignin from "./components/EmailSignin"
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  if (session && session.user){
    return redirect("/personal")
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
      </div>
      <div className={styles.container}>
        <div className={styles.title} style={{ position: 'relative',top: '24px', left: '16px' }}>登入會員</div>
        <GoogleSigninButton />
        <div className={styles.split} >          
          <span className={styles.or}>或</span>
        </div>
        <EmailSignin />
        <div className={styles.keep_login} >
          <img src="Mask.svg" ></img>
          <span className={styles.keep_login_text} >保持登入</span>
        </div>
        <div className={styles.account_check}>
          還沒有帳號嗎？
          <span className={styles.register_now} >馬上註冊</span>
        </div>
        <div className={styles.service}>
          登入即同意 AsiaYo
          <span className={styles.service_regulation_blue}> 服務條款</span>
          與
          <span className={styles.service_regulation_blue}> 隱私權政策</span>
        </div>
      </div>
    </div>

  );
}
