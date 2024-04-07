import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

export const Logo = () => (
  <Link className={styles.logo} href={"https:localhost:3000/"}>
    <Image
      alt="Findy"
      className={styles.image}
      height={32}
      priority
      src="/logo.svg"
      width={212}
    />
  </Link>
);
