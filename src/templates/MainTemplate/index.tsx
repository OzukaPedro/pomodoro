import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div>
      <CountDown />
      <Container>
        <Logo />

        <Menu />
        {children}
      </Container>
    </div>
  );
}
