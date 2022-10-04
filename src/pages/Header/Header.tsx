import { useState } from 'react';

import { Typography } from '@mui/material';

import { HeaderContainer, LinkContainer, Title, StyledLink } from './styled';
import TopMenu from './TopMenu';
import { ActiveModal } from '../../types/modal';
import AppModal from '../../components/AppModal';

export const MODALS_CONTENT = {
    Info: {
        title: 'Information',
        content: <p>Information modal content</p>,
    },
    Stats: {
        title: 'Statistics',
        content: <p>Statistics modal content</p>,
    },
    Settings: {
        title: 'Settings',
        content: <p>Settings modal content</p>,
    },
};

const MENU_LINKS = Object.keys(MODALS_CONTENT) as
    | (keyof typeof MODALS_CONTENT | null)[];

const Header = () => {
    const [activeModal, setActiveModal] = useState<ActiveModal>(null);

    const onMenuChangeHandler = (newActiveModal: ActiveModal) => {
        setActiveModal(newActiveModal);
    };

    return (
        <HeaderContainer>
            <Title onClick={() => onMenuChangeHandler(null)}>
                <Typography>Redactle</Typography>
            </Title>
            <LinkContainer
                sx={{ display: { sm: 'flex' } }}
                value={activeModal}
                exclusive
                onChange={(_event, type) => onMenuChangeHandler(type)}
                aria-label="header-menu"
            >
                {Object.keys(MODALS_CONTENT).map((menuLink) => (
                    <StyledLink value={menuLink}>
                        <Typography>{menuLink}</Typography>
                    </StyledLink>
                ))}
            </LinkContainer>
            <TopMenu menuList={MENU_LINKS} onMenuChange={onMenuChangeHandler} />
            {activeModal && (
                <AppModal
                    title={MODALS_CONTENT[activeModal].title || ''}
                    onClose={() => onMenuChangeHandler(null)}
                    open={!!activeModal}
                >
                    {MODALS_CONTENT[activeModal].content || <></>}
                </AppModal>
            )}
        </HeaderContainer>
    );
};

export default Header;
