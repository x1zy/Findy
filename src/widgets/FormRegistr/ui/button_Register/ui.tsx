
import {useFormState} from "../configure"
import styles from "./btn_reg.module.scss"
import {register} from "@/entites/userAPI";
export const Btn_register = () =>{
    
    const { username, setUsername, email, setEmail, hashed_password, setHashedPassword, confirmed_password, setConfirmedPassword } = useFormState();
    const signUp = async () => {   
        try {
            await register(username, email, hashed_password, confirmed_password)
            alert("Вам на почту отправлено письмо с ссылкой, перейдите по ней для подтверждения аккаунта.")
           
        } catch (e) {
            alert(e)
        }
    }

    return(
        <button className={styles.login_button} type="button" onClick={signUp}>Регистрация</button>
    )
}