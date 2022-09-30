import { AppBar, Box, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
    position: sticky;
    top: 0;
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.palette.primary.main};
  `
);

export const StyledLinkContainer = styled(Box)(
  () => `
    display: none;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
  `
);

export const StyledMenuContainer = styled(Box)(
  () => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: left;
    align-items: center;
    width: 200px;
    height: 100%;
  `
);
