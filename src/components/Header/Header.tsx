import { StyledAppBar, StyledLinkContainer } from "./Styled";

const Header = () => {
  return (
    <StyledAppBar>
      <h1>title</h1>
      <StyledLinkContainer>
        <h1>link1</h1>
        <h1>link2</h1>
        <h1>link3</h1>
      </StyledLinkContainer>
    </StyledAppBar>
  );
};

export default Header;
