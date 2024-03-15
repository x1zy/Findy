import clsx from "clsx";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { Burger } from "./burger";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.row}>
          <Logo />
          <Nav />
        </div>
        <div className={styles.row}>
          <Burger />
        </div>
      </div>
    </header>
  );
};
