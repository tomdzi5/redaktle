import {
    AppBar,
    Box,
    ToggleButton,
    ToggleButtonGroup,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled(AppBar)`
    position: sticky;
    top: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-bottom: 1px solid #c8ccd1;
    box-shadow: inset 0 -1px 3px rgb(0 0 0 / 8%);
    flex-basis: 70%;
`;

export const Title = styled(Box)`
    padding: 2rem;
    & > p {
        font-size: 1.4rem;
    }
`;

export const LinkContainer = styled(ToggleButtonGroup)`
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 20%;
    min-width: 16rem;
    margin-inline: auto;
`;

export const StyledLink = styled(ToggleButton)`
    font-size: 1.3rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    min-width: 64px;
    /* padding: 6px 8px; */
    border: none;
    border-radius: 0;
    text-transform: none;

    &.Mui-selected,
    &.Mui-selected > p {
        font-weight: 500;
        color: ${({ theme }) => theme.palette.secondary.main};
    }
`;

export const MenuContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 100%;
`;

export const StyledMenuIcon = styled(MenuIcon)`
    color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledMenuItem = styled(MenuItem)`
    background-color: inherit;
    &:hover {
        color: ${({ theme }) => theme.palette.secondary.main};
    }
`;
