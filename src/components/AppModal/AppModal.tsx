import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

import { ModalContainer, Header, Main, StyledCloseIcon } from './styled';

type PropsType = {
    title: string;
    children: React.ReactElement;
    onClose: () => void;
    open: boolean;
};

const AppModal = (props: PropsType) => {
    const { title, children, onClose, open } = props;

    return (
        <Modal open={open} onClose={() => onClose()}>
            <ModalContainer>
                <Header>
                    <Typography variant="h2">{title}</Typography>
                    <IconButton onClick={() => onClose()}>
                        <StyledCloseIcon />
                    </IconButton>
                </Header>
                <Main>{children}</Main>
            </ModalContainer>
        </Modal>
    );
};

export default AppModal;
