import { Clock4Icon } from "lucide-react";

import styles from "./style.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <Clock4Icon />

      <h1>Pomodoro</h1>
    </div>
  );
}
