import styles from "./input.module.scss"
import clsx from "clsx"
import {observer} from "mobx-react-lite";
import {useFormState} from "../configure"


export const Input= observer(() => {
    const { username, setUsername, email, setEmail, hashed_password, setHashedPassword, confirmed_password, setConfirmedPassword } = useFormState();

    return(

    <form className={styles.some_form}>
        <h3>Регистрация</h3>
        <input
            className={clsx("some_input", styles.some_input)}
            id="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder="Username"/>
        <input
            className={clsx("some_input", styles.some_input)}
            onChange={e => setEmail(e.target.value)}
            value={email}
            id="email"
            type="text"
            placeholder="Email"/>
        <input
            className={clsx("some_input", styles.some_input)}
            id="hashed_password"   
            onChange={e => setHashedPassword(e.target.value)}
            value={hashed_password}
            autoComplete="on"
            type="password"
            placeholder="Password"/>
        <input
            className={clsx("some_input", styles.some_input)}
            onChange={e => setConfirmedPassword(e.target.value)}
            value={confirmed_password}
            id="confirmed_password"
            autoComplete="on"
            type="password"
            placeholder="Confirme password"/>
    </form>
    
    )

});
