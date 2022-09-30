import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import {
  ModalContainer,
  Header,
  Main,
  StyledCloseIcon,
  Footer,
  ModalButton,
} from "./styled";

type PropsType = {
  title: string;
  children: React.ReactElement;
  onClose: (
    event:
      | React.MouseEvent<HTMLElement>
      | React.MouseEvent<HTMLLIElement>
      | null,
    newAligment: string | null
  ) => void;
  open: boolean;
};

const CustomModal = (props: PropsType) => {
  const { title, children, onClose, open } = props;

  return (
    <Modal open={open} onClose={() => onClose(null, null)}>
      <ModalContainer>
        <Header>
          <Typography variant="h2">{title}</Typography>
          <IconButton onClick={(event) => onClose(event, null)}>
            <StyledCloseIcon />
          </IconButton>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <ModalButton onClick={(event) => onClose(event, null)}>
            <Typography variant="button">Close</Typography>
          </ModalButton>
        </Footer>
      </ModalContainer>
    </Modal>
  );
};

export default CustomModal;
