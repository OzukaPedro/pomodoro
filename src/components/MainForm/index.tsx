import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import styles from "./styles.module.css";
export function MainForm() {
  return (
    <form className={styles.mainForm}>
      <DefaultInput
        type="text"
        id="MainInput"
        placeholder="teste"
        labelText="Task"
      />
      <DefaultButton icon={<PlayCircleIcon />} />
    </form>
  );
}
