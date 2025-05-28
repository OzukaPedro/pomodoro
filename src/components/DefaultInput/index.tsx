import type React from "react";
import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="meuInput">{labelText}</label>
      <input type={type} className={styles.input} id={id} {...rest} />
    </div>
  );
}
