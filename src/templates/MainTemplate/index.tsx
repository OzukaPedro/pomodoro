import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Menu } from "../../components/Menu";
import styles from "./styles.module.css";
export function MainTemplate() {
  return (
    <div className={styles.mainTemplate}>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <Menu />
      </Container>
    </div>
  );
}
