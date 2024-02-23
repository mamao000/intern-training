"use client";
import styles from "./components.module.css"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SyntheticEvent } from 'react'; // Import SyntheticEvent

interface CredentialsFormProps {
  csrfToken?: string;
}

export default function CredentialsForm() {
    const [userInfo, setUserInfo] = useState({email: "", password: ""})
    const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false,
        });
    };

    return (
    <form onSubmit={handleSubmit} style={{ position: 'relative',top: '114px', left: '16px' }}>
        <div className={styles.form_group} >
            <label className={styles.form_label} >電子郵件</label>
            <input type="text" value={userInfo.email} onChange={({target}) => {setUserInfo({...userInfo, email: target.value})}} className={styles.form_input} required />
        </div >
            <text className={styles.reminder} >請輸入您用於預訂時的電子郵件</text>
        <div className={styles.form_group} style={{ position: 'relative',top: '16px' }}>
            <label className={styles.form_label}>密碼</label>
            <input type="password" value={userInfo.password} onChange={({target}) => {setUserInfo({...userInfo, password: target.value})}} className={styles.form_input} required />
        </div>
            <text className={styles.forgot_password} style={{ position: 'relative',top: '16px'}}>忘記密碼</text>
        <div >
            <button className={styles.submit} type="submit" style={{ position: 'relative',top: '71px'}}>登入</button>
        </div>
    </form>
    );
}