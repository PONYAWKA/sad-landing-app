import logo from "@/assets/images/logo_blue.png";
import { NAV_ROUTES } from "@/constants/routs";
import { Button } from "@/sad-components-lib/components/Button";

import { Container, Content, Image, LinkContainer, StyledLink } from "./styled";
export const NavBar = () => {
  return (
    <Container>
      <Content>
        <Image src={logo} />
        <LinkContainer>
          {NAV_ROUTES.map(({ name, to, children }) => (
            <StyledLink theme={name} to={to} key={name}>
              {name}
            </StyledLink>
          ))}
        </LinkContainer>
        <Button>Watch video</Button>
      </Content>
    </Container>
  );
};
