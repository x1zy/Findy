import { Button } from "@/shared/ui/button/button";
import clsx from "clsx";
import styles from "./home.module.scss";

export function HomePage() {
  return (
    <div className={clsx("home-page", styles.home)}>
      <div className="banner">
        <div className={clsx("container", styles.container)}>
          <h1 className={clsx("greeting", styles.greeting)}>Hello there!</h1>
          <Button
            className={clsx("create-team", styles.button)}
          >
            Create Team
          </Button>
        </div>
      </div>
    </div>
  );
}
