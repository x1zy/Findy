import { Header } from "@/widgets/header/ui/index";
import { Link_login } from "./Btn_Link_Login/index";
import styles from "./styles.module.scss"
import {RegisterForm} from "./RegisterForm/index"

export const FormRegistr = () =>{
    return(
    <>
    <Header />
    <div className={styles.form_page}>
    <RegisterForm/>
    <Link_login/>
    </div>
   </>
    )
}