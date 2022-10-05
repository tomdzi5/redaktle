import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

import { ModalContainer, ModalHeader, Main, StyledCloseIcon } from './styled';

type PropsType = {
    title: string;
    children: React.ReactElement;
    onClose: () => void;
    open: boolean;
};

const AppModal = ({ title, children, onClose, open }: PropsType) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalContainer>
                <ModalHeader>
                    <Typography variant="h2">{title}</Typography>
                    <IconButton onClick={onClose}>
                        <StyledCloseIcon />
                    </IconButton>
                </ModalHeader>
                <Main>{children}</Main>
            </ModalContainer>
        </Modal>
    );
};

export default AppModal;
