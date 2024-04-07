"use client"
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { register } from "@/entites/user/API/userAPI";
import {InputForm} from "../Input/ui";
import {ButtonForm} from "../Register_Btn/index";
import styles from "./RegisterForm.module.scss"
import UserStore from "@/entites/user/userStore";

export const RegisterForm = observer(() => {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [hashed_password, setHashedPassword] = useState("");
const [confirmed_password, setConfirmedPassword] = useState("");


const signUp = async () => {
  try {
    await register(username, email, hashed_password, confirmed_password);
    const userStore = UserStore.getInstance();
    userStore.setIsAuth(true); // ауторизация прошла успешно

    alert("A confirmation email has been sent to your email address. Please follow the link to confirm your account.");
  } catch (e) {
    alert(e);
  }
};



return (
<>
<div className={styles.form_page}>
<h2>Регистрация</h2>
<form className={styles.some_form}>
<InputForm label="Username" value={username} onChange={setUsername} />
<InputForm label="Email" value={email} onChange={setEmail} />
<InputForm label="Password" value={hashed_password} onChange={setHashedPassword} />
<InputForm label="Confirm Password" value={confirmed_password} onChange={setConfirmedPassword} />
</form>
<br />
<ButtonForm onClick={signUp} />
<br />

</div>
</>
);
});
