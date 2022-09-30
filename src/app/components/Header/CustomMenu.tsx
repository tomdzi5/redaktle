import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { StyledMenuContainer } from "./Styled";

type Props = {
  menuList: string[];
};

const CustomMenu = (props: Props) => {
  const { menuList } = props;
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const onCloseHandler = () => {
    setAnchor(null);
  };

  return (
    <StyledMenuContainer>
      <IconButton
        sx={{ display: { sm: "none" } }}
        aria-controls={open ? "header-menu" : undefined}
        aria-haspopop="true"
        aria-extended={open ? "true" : undefined}
        onClick={onClickHandler}
      >
        <MenuIcon color="inherit" />
      </IconButton>
      <Menu
        id="header-menu"
        anchorEl={anchor}
        open={open}
        onClose={onCloseHandler}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
        PaperProps={{
          style: {
            width: 150,
          },
        }}
        sx={{ display: { sm: "none" } }}
      >
        {menuList.map((menuItem) => (
          <MenuItem onClick={onCloseHandler}>{menuItem}</MenuItem>
        ))}
      </Menu>
    </StyledMenuContainer>
  );
};

export default CustomMenu;
