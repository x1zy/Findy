import {Input} from "./input/index";
import { Header } from "@/widgets/header/ui/index";
import { Btn_register } from "./button_Register/index";
import { Link_login } from "../Link_Login/ui";
import styles from "./styles.module.scss"


export const FormRegistr = () =>{
    return(
    <>
    <Header />
    <div className={styles.form_page}>
    <Input/>
    <Btn_register/>
    <Link_login/>
    </div>
   </>
    )
}