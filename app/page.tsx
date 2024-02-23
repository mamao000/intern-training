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
        <text className={styles.title} style={{ position: 'relative',top: '24px', left: '16px' }}>登入會員</text>
        <GoogleSigninButton />
        <div className={styles.split} style={{ position: 'relative',top: '89px', left: '16px' }}>
          <img src="Line.svg" className={styles.line} style={{ marginRight: '57px' }}></img>
          <text className={styles.or}>或</text>
          <img src="Line.svg" className={styles.line} style={{ marginLeft: '57px' }}></img>
        </div>
        <EmailSignin />
        <div className={styles.keep_login} style={{ position: 'relative',top: '82px'}}>
          <img src="Mask.svg" ></img>
          <text className={styles.keep_login_text} >保持登入</text>
        </div>
        <div className={styles.account_check}>
          <text className={styles.no_account} >還沒有帳號嗎？</text>
          <text className={styles.register_now} >馬上註冊</text>
        </div>
        <div style={{ position: 'relative',top: '152px', left: '16px' , width: '353px'}}>
          <text className={styles.sevice_regulation} >登入即同意 AsiaYo</text>
          <text className={styles.service_regulation_blue}> 服務條款</text>
          <text className={styles.sevice_regulation}>與</text>
          <text className={styles.service_regulation_blue}> 隱私權政策</text>
        </div>
      </div>
    </div>

  );
}
