"use client";
import clsx from "clsx";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/burger/sheet";
import styles from "@/widgets/header/ui/burger/burger.module.scss";
import { items } from "../nav/config";

export const Burger = () => {
  return (
    <div className={clsx("btn-reset", styles.btn)}>
      <Sheet>
        <SheetTrigger>
          <Menu className={clsx("burger-icon", styles.burgerIcon)} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <ul className={(clsx("list-item"), styles.list)}>
                {items.map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className={(clsx("link-item"), styles.link)}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
