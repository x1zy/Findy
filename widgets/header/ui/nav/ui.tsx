"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { items } from "./config";
import styles from "./nav.module.scss";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={clsx("list-reset", styles.list)}>
        {items.map((item) => {
          const isCurrentPage = pathname === item.href;

          return (
            <li className={styles.item} key={item.text}>
              <Link
                className={clsx(styles.link, isCurrentPage && styles.isCurrent)}
                href={item.href}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
