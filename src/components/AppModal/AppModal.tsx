import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

import { ModalContainer, ModalHeader, Main, StyledCloseIcon } from './styled';
import { ActiveModal } from '../../types/modal';

type PropsType = {
    title: string;
    children: React.ReactElement;
    onClose: (event: {}, aligment: ActiveModal) => void;
    open: boolean;
};

const AppModal = (props: PropsType) => {
    const { title, children, onClose, open } = props;

    return (
        <Modal open={open} onClose={(event) => onClose(event, null)}>
            <ModalContainer>
                <ModalHeader>
                    <Typography variant="h2">{title}</Typography>
                    <IconButton onClick={(event) => onClose(event, null)}>
                        <StyledCloseIcon />
                    </IconButton>
                </ModalHeader>
                <Main>{children}</Main>
            </ModalContainer>
        </Modal>
    );
};

export default AppModal;
