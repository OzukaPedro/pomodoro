import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import styles from "./styles.module.css";
export function MainTemplate() {
  return (
    <div className={styles.mainTemplate}>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <h1>oi</h1>
      </Container>
    </div>
  );
}
