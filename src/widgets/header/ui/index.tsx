"use client";
import clsx from "clsx";
import { Logo } from "./logo";
import { Nav } from "./nav";
import styles from "./styles.module.scss";
import { Burger } from "./burger";

export const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.row}>
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  );
};
