import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const ModalContainer = styled(Box)`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary.light};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  border-radius: 0.6rem;
  border: none;
  outline: none;
`;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 4.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
`;

export const StyledCloseIcon = styled(CloseIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Main = styled(Box)`
  width: 100%;
  max-height: 70vh;
  overflow-y: scroll;
  padding: 0 2.2rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > * {
    max-width: 80%;
    max-height: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled(Box)`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary.light};
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: right;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 0 0 0.6rem 0.6rem;

  & > button {
    margin-right: 1.2rem;
  }
`;

export const ModalButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
