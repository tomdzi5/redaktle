import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { ModalContainer, Header, Main, StyledCloseIcon } from './styled';
import { ModalTypes } from '../../types/modal';

type PropsType = {
    title: string;
    children: React.ReactElement;
    onClose: (event: {}, aligment: ModalTypes) => void;
    open: boolean;
};

const AppModal = (props: PropsType) => {
    const { title, children, onClose, open } = props;

    return (
        <Modal open={open} onClose={(event) => onClose(event, null)}>
            <ModalContainer>
                <Header>
                    <Typography variant="h2">{title}</Typography>
                    <IconButton onClick={(event) => onClose(event, null)}>
                        <StyledCloseIcon />
                    </IconButton>
                </Header>
                <Main>{children}</Main>
            </ModalContainer>
        </Modal>
    );
};

export default AppModal;
