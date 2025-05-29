import styles from "./styles.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <a href="">Entenda como funciona a técnica pomodoro</a>
        <a href="">
          Chronos Pomodo &copy; {new Date().getFullYear()} - Feito com o coração{" "}
        </a>
      </div>
    </>
  );
}
