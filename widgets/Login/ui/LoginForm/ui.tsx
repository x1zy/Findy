"use client"

import { useState } from "react";
import { observer } from "mobx-react-lite";
import { login } from "@/entites/user/API/userAPI";
import { InputForm } from '../Input/index';
import { ButtonForm } from '../Login_btn/index';
import styles from "./Form.module.scss";
import UserStore from "@/entites/user/userStore";
import Router from 'next/router';
const LoginForm = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userStore = UserStore.getInstance();
  


  const signIn = async () => {
    try {
        const response = await login(email, password);
        localStorage.setItem('token', response.data.access_token);
        userStore.setUser(response.data.user);
        
        userStore.setIsAuth(true);      
          
         
      
    } catch (e) {
        alert(e);
    }
}

  return (
    <div className={styles.form_page}>
      <h2>Войти в аккаунт</h2>
      <form className="some_form">
        <InputForm placeholder="Email" value={email} onChange={setEmail} />
        <InputForm placeholder="Password" value={password} onChange={setPassword} />
      </form>
      <br />
      <ButtonForm onClick={signIn} />
    </div>
  );
});

export default LoginForm;
