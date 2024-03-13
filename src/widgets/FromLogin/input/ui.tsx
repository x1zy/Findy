import { useFormState } from "@/widgets/FormRegistr/ui/configure"
import styles from "./input.module.scss"
export const Input = () => {
    const  { username, setUsername, email, setEmail, hashed_password, setHashedPassword, confirmed_password, setConfirmedPassword ,password,setPassword} = useFormState();
    return(
        <>
        <div className={styles.input_page}>
            <h2>Войти в аккаунт</h2>
            <form className="some-form">
                <input
                    className={styles.some_input}
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email"/>
                <input
                    className={styles.some_input}
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    autoComplete="on"
                    type="password"
                    placeholder="Password"/>
            </form>
        </div>
    </>
    )
}