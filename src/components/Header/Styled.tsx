import {
  AppBar,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled(AppBar)(
  () => `
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to bottom,#ffffff 50%,#f6f6f6 100%);
  `
);

export const Title = styled(Button)(
  ({ theme }) => `
    margin-left: 0.6rem;
    color: ${theme.palette.primary.main};
    font-size: 1.4rem;
    font-weight: 700;
  `
);

export const LinkContainer = styled(ToggleButtonGroup)(
  () => `
    display: none;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    height: 100%;
    padding-left: 15%;
  `
);

export const StyledLink = styled(ToggleButton)(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
    font-size: 1.3rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    min-width: 64px;
    padding: 6px 8px;
    border: none;
    border-radius: 0;
    text-transform: none;

    &.Mui-selected{
      color: ${theme.palette.primary.contrastText};
      background: linear-gradient(to bottom,rgba(167,215,249,0) 0,#a7d7f9 100%);
    }
  `
);

export const MenuContainer = styled(Box)(
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

export const StyledMenuIcon = styled(MenuIcon)(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
  `
);

export const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
    background-color: inherit;
    font-size: 1.1em;
    font-family: 'Linux Libertine','Georgia','Times', serif;

    &:hover{
      color: ${theme.palette.primary.contrastText};
      background: linear-gradient(to bottom,rgba(167,215,249,0) 0,#a7d7f9 100%);
    }
  `
);
