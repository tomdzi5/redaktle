import { HeaderContainer, LinkContainer, Title, StyledLink } from "./styled";
import CustomMenu from "./CustomMenu";
import { useState } from "react";
import Modals from "../Modals";
import { ModalTypes } from "../../types/modal";
import { Typography } from "@mui/material";

const MENU_LINKS = ["Info", "Stats", "Settings"];

const Header = () => {
  const [alignment, setAlignment] = useState<ModalTypes>(null);

  const onMenuChangeHandler = (event: {}, newAligment: ModalTypes) => {
    console.log(event);
    setAlignment(newAligment);
  };

  return (
    <HeaderContainer>
      <Title onClick={(event) => onMenuChangeHandler(event, null)}>
        <Typography>Redactle</Typography>
      </Title>
      <LinkContainer
        sx={{ display: { sm: "flex" } }}
        value={alignment}
        exclusive
        onChange={onMenuChangeHandler}
        aria-label="header-menu"
      >
        {MENU_LINKS.map((menuLink) => (
          <StyledLink value={menuLink}>
            <Typography>{menuLink}</Typography>
          </StyledLink>
        ))}
      </LinkContainer>
      <CustomMenu menuList={MENU_LINKS} onMenuChange={onMenuChangeHandler} />
      <Modals type={alignment} onClose={onMenuChangeHandler} />
    </HeaderContainer>
  );
};

export default Header;
