import { HeaderContainer, LinkContainer, Title, StyledLink } from "./Styled";
import CustomMenu from "./CustomMenu";
import React, { useState } from "react";

const MENU_LINKS = ["Info", "Stats", "Settings"];

const Header = () => {
  const [alignment, setAlignment] = useState<null | string>(null);

  const onMenuChangeHandler = (
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLLIElement>,
    newAligment: string | null
  ) => {
    console.log(event);
    setAlignment(newAligment);
  };

  return (
    <HeaderContainer>
      <Title onClick={(event) => onMenuChangeHandler(event, null)}>
        Redactle
      </Title>
      <LinkContainer
        sx={{ display: { sm: "flex" } }}
        value={alignment}
        exclusive
        onChange={onMenuChangeHandler}
        aria-label="header-menu"
      >
        {MENU_LINKS.map((menuLink) => (
          <StyledLink value={menuLink}>{menuLink}</StyledLink>
        ))}
      </LinkContainer>
      <CustomMenu menuList={MENU_LINKS} onMenuChange={onMenuChangeHandler} />
    </HeaderContainer>
  );
};

export default Header;
