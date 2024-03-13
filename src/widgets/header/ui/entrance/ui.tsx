import Link from "next/link";

import styles from "./entrance.module.scss";
export const Entrarce = () => (
    <Link className={styles.entrance_button} href='/pages/RegistorPage/'>
     <button>Вход</button>
    </Link>
  );
  