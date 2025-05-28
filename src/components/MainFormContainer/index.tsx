import styles from "./styles.module.css";

type MainFormContainerProps = {
  children: React.ReactNode;
};

export function MainFormContainer({ children }: MainFormContainerProps) {
  return <div className={styles.mainFormContainer}>{children}</div>;
}
