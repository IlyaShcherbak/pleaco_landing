// Core
import { FC, useState } from 'react';

// MUI
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

// Images
import greenMenu from '../../../assets/images/BurgerMenuGreenIcon.svg';
import whiteMenu from '../../../assets/images/BurgerMenuWhiteIcon.svg';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    isStiky: boolean;
}


export const BurgerMenu: FC<PropTypes> = ({ isStiky }) => {
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const burgerIconView = () => {
        if (isStiky) {
            return (
                <img
                    alt = 'Menu'
                    src = { greenMenu }
                />
            );
        }

        return (
            <img
                alt = 'Menu'
                src = { whiteMenu }
            />
        );
    };

    return (
        <div>
            <Button
                // eslint-disable-next-line no-undefined
                aria-controls = { open ? 'basic-menu' : undefined }
                // eslint-disable-next-line no-undefined
                aria-expanded = { open ? 'true' : undefined }
                aria-haspopup = 'true'
                id = 'basic-button'
                onClick = { handleClick }>
                {burgerIconView()}
            </Button>
            <S.Menu
                MenuListProps = {{
                    'aria-labelledby': 'basic-button',
                }}
                anchorEl = { anchorEl }
                id = 'basic-menu'
                open = { open }
                slotProps = {{
                    paper: {
                        sx: {
                            backgroundColor: '#32AFB4',
                            display:         'flex',
                            justifyContent:  'center',
                            alignItems:      'center',
                            padding:         '32px 16px',
                            width:           '100%',
                            maxWidth:        '100%',
                            top:             '0 !important',
                            left:            '0 !important',
                            right:           '0px',
                            borderRadius:    '0 0 12px 12px',
                        },
                    },
                }}
                onClose = { handleClose }>
                <S.MenuItem onClick = { handleClose }>About</S.MenuItem>
                <S.MenuItem onClick = { handleClose }>Blog</S.MenuItem>
                <S.MenuItem onClick = { handleClose }>Jobs</S.MenuItem>
                <S.MenuItem onClick = { handleClose }>Documentation</S.MenuItem>

                <MenuItem onClick = { handleClose }>
                    <S.MenuButton
                        variant = 'outlined'>
                        Start for Free
                    </S.MenuButton>
                </MenuItem>
            </S.Menu>
        </div>
    );
};
