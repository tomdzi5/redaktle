import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const CustomMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <IconButton sx={{ display: { sm: "none" } }}>
      <MenuIcon color="inherit" />
    </IconButton>
  );
};

export default CustomMenu;
