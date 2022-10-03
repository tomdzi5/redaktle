import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const ModalContainer = styled(Box)`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary.light};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  border-radius: 0.6rem;
  overflow: hidden;
  border: none;
  outline: none;
`;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
  background-color: ${({ theme }) => theme.palette.primary.main};

  & > h2 {
    margin-left: 1.6rem;
  }

  & > button {
    margin-right: 1.6rem;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Main = styled(Box)`
  display: flex;
  flex-basis: 70%;
  width: 100%;
  max-height: 70vh;
  overflow-y: scroll;
  padding-inline: 1.6rem;
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
