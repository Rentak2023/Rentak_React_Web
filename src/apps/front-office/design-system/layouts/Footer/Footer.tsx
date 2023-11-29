import { Container } from "../../components/Grids";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Pages from "./Pages";
import Services from "./Services";
import SocialMedia from "./SocialMedia";
import { FooterWrapper } from "./style";

export default function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <SocialMedia />
        <Pages />
        <Services />
        <Contact />
      </FooterWrapper>
      <Copyright />
    </Container>
  );
}
