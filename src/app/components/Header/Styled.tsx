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
  ({ theme }) => `
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${theme.palette.primary.main};
  `
);

export const Title = styled(Button)(
  ({ theme }) => `
    margin-left: 0.6rem;
    color: ${theme.palette.secondary.main};
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
    color: ${theme.palette.secondary.main};
    font-size: 1.3rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 8px;
    border: none;

    &.Mui-selected{
      color: ${theme.palette.secondary.contrastText};
      background: ${theme.palette.primary.light};
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
    color: ${theme.palette.secondary.main};
  `
);

export const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
    color: ${theme.palette.secondary.main};
    background: ${theme.palette.primary.main};
  `
);
