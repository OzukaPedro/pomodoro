import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { MainContainer } from "../../components/MainContainer";
import { Menu } from "../../components/Menu";
type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <MainContainer>
        <Container>
          <CountDown />
        </Container>
        <Container>
          <Logo />

          <Menu />
          {children}
        </Container>
      </MainContainer>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
