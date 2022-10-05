import React, { useState } from 'react';

import { IconButton, Menu } from '@mui/material';

import { MenuContainer, StyledMenuIcon, StyledMenuItem } from './styled';
import { ActiveModal } from '../../types/modal';

type Props = {
    menuList: ('Settings' | 'Info' | 'Stats' | null)[];
    onMenuChange: (newActiveModal: ActiveModal) => void;
};

const TopMenu = ({ menuList, onMenuChange }: Props) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchor);
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget);
    };
    const onCloseHandler = (newActiveModal: ActiveModal = null) => {
        onMenuChange(newActiveModal);
        setAnchor(null);
    };

    return (
        <MenuContainer sx={{ display: { sm: 'none' } }}>
            <IconButton
                sx={{ display: { sm: 'none' } }}
                aria-controls={isMenuOpen ? 'header-menu' : undefined}
                onClick={onClickHandler}
            >
                <StyledMenuIcon color="inherit" />
            </IconButton>
            <Menu
                id="header-menu"
                anchorEl={anchor}
                open={isMenuOpen}
                onClose={() => onCloseHandler()}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                MenuListProps={{
                    'aria-labelledby': 'header-menu',
                    disablePadding: true,
                }}
                PaperProps={{
                    style: {
                        width: 150,
                    },
                }}
                sx={{ display: { sm: 'none' } }}
            >
                {menuList.map((menuItem) => (
                    <StyledMenuItem
                        onClick={() => onCloseHandler(menuItem)}
                        key={menuItem}
                    >
                        {menuItem}
                    </StyledMenuItem>
                ))}
            </Menu>
        </MenuContainer>
    );
};

export default TopMenu;
