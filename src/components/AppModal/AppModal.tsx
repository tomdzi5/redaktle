import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

import {
    ModalContainer,
    ModalHeader,
    ModalContent,
    StyledCloseIcon,
} from './styled';

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
                <ModalContent>{children}</ModalContent>
            </ModalContainer>
        </Modal>
    );
};

export default AppModal;