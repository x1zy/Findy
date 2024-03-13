import { Header } from "../header/ui";
import {Input} from "./input/index"
import { Btn_Login } from "./btn_Login/index";
import styles from "@/widgets/FromLogin/styles.module.scss"
import { Link_Register } from "./Register_Link";

export const LoginForms = () =>{
    return(
        <>
        <Header/>
        <div className={styles.form_page}>
        <Input/>
        <Btn_Login />
        <Link_Register/>
        </div>
        </>
    )
}