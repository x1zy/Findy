import Image from "next/image";
import styles from "./avatar.module.scss";

export const Avatar = () => (
 
    <Image
      alt="Avatar"
      className={styles.avatar}
      height={389}
      priority
      src="/avatar.png"
      width={404}
    />

);
