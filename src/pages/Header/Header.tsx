import { useState } from 'react';

import { Typography } from '@mui/material';

import {
    HeaderContainer,
    HeaderButtons,
    PageTitle,
    StyledLink,
} from './styled';
import TopMenu from './TopMenu';
import { ActiveModal } from '../../types/modal';
import AppModal from '../../components/AppModal';

export const MODALS_CONTENT = {
    info: {
        title: 'Information',
        content: <p>Information modal content</p>,
    },
    stats: {
        title: 'Statistics',
        content: <p>Statistics modal content</p>,
    },
    settings: {
        title: 'Settings',
        content: <p>Settings modal content</p>,
    },
};

const MENU_LINKS = Object.keys(MODALS_CONTENT) as
    | (keyof typeof MODALS_CONTENT)[];

const Header = () => {
    const [activeModal, setActiveModal] = useState<ActiveModal>(null);

    const onMenuChangeHandler = (newActiveModal: ActiveModal = null) => {
        setActiveModal(newActiveModal);
    };

    return (
        <HeaderContainer>
            <PageTitle onClick={() => onMenuChangeHandler()}>
                <Typography>Redactle</Typography>
            </PageTitle>
            <HeaderButtons
                sx={{ display: { sm: 'flex' } }}
                value={activeModal}
                exclusive
                onChange={(_event, type) => onMenuChangeHandler(type)}
                aria-label="header-menu"
            >
                {MENU_LINKS.map((menuLink) => (
                    <StyledLink value={menuLink} key={menuLink}>
                        <Typography>
                            {menuLink[0].toUpperCase() + menuLink.substring(1)}
                        </Typography>
                    </StyledLink>
                ))}
            </HeaderButtons>
            <TopMenu menuList={MENU_LINKS} onMenuChange={onMenuChangeHandler} />
            {activeModal && (
                <AppModal
                    title={MODALS_CONTENT[activeModal].title || ''}
                    onClose={() => onMenuChangeHandler()}
                    open={!!activeModal}
                >
                    {MODALS_CONTENT[activeModal].content || <></>}
                </AppModal>
            )}
        </HeaderContainer>
    );
};

export default Header;
