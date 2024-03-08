import clsx from "clsx";
import { headerModel } from "../../model";
import { useToggler } from "@/shared/lib/toggler";
import { Sheet, SheetHeader } from "@/shared/ui/burger/sheet";
import styles from "./burger.module.scss";

export const Burger = () => {
  const { open } = useToggler(headerModel.toggler);

  return (
    <button className={clsx("btn-reset", styles.btn)} onClick={open}>
      <SheetHeader/>
    </button>
  );
};
