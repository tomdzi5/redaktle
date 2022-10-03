import { IconButton, Menu } from "@mui/material";
import React, { useState } from "react";
import { MenuContainer, StyledMenuIcon, StyledMenuItem } from "./Styled";

type Props = {
  menuList: string[];
  onMenuChange: (
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLLIElement>,
    newAligment: string | null
  ) => void;
};

const CustomMenu = (props: Props) => {
  const { menuList, onMenuChange } = props;
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const onCloseHandler = (
    event: React.MouseEvent<HTMLLIElement>,
    menuItem: string
  ) => {
    onMenuChange(event, menuItem);
    setAnchor(null);
  };

  return (
    <MenuContainer>
      <IconButton
        sx={{ display: { sm: "none" } }}
        aria-controls={open ? "header-menu" : undefined}
        aria-haspopop="true"
        aria-extended={open ? "true" : undefined}
        onClick={onClickHandler}
      >
        <StyledMenuIcon color="inherit" />
      </IconButton>
      <Menu
        id="header-menu"
        anchorEl={anchor}
        open={open}
        onClose={onCloseHandler}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        MenuListProps={{
          "aria-labelledby": "header-menu",
          disablePadding: true,
        }}
        PaperProps={{
          style: {
            width: 150,
          },
        }}
        sx={{ display: { sm: "none" } }}
      >
        {menuList.map((menuItem) => (
          <StyledMenuItem onClick={(event) => onCloseHandler(event, menuItem)}>
            {menuItem}
          </StyledMenuItem>
        ))}
      </Menu>
    </MenuContainer>
  );
};

export default CustomMenu;
