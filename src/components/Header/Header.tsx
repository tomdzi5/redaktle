import { StyledAppBar, StyledLinkContainer } from "./Styled";
import CustomMenu from "./CustomMenu";

const Header = () => {
  const links = ["link1", "link2", "link3"];
  return (
    <StyledAppBar>
      <h1>title</h1>
      <StyledLinkContainer sx={{ display: { sm: "flex" } }}>
        <h1>link1</h1>
        <h1>link2</h1>
        <h1>link3</h1>
      </StyledLinkContainer>
      <CustomMenu />
    </StyledAppBar>
  );
};

export default Header;
