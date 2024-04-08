
import clsx from "clsx";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { Burger } from "./burger";
import {Entry} from "./entry/ui"
import styles from "./styles.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Entry/>
        </div>
      </div>
    </header>
  );
};
