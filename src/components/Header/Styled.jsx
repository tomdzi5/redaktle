import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
    position: sticky;
    top: 0;
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.palette.primary.main};
  `
);

export const StyledLinkContainer = styled(Box)(
  () => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 100%;
  `
);
