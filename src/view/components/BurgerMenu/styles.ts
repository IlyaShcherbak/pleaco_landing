// Core
import { Menu as MenuCore, Button, MenuItem as MenuItemCore, styled } from '@mui/material';

export const Menu = styled(MenuCore)(() => ({
    // '&.MuiMenu-root': {
    //     backgroundColor: 'blue',
    // },
}));

export const MenuItem = styled(MenuItemCore)(() => ({
    justifyContent: 'center',
    color:          '#FFFFFF',
    fontSize:       '20px',
    fontWeight:     '400',
    lineHeight:     '28px',
    padding:        0,
}));

export const MenuButton = styled(Button)(() => ({
    fontSize:     '20px',
    fontWeight:   '400',
    lineHeight:   '28px',
    color:        '#FFFFFF',
    borderColor:  '#FFFFFF',
    padding:      '16px 40px',
    borderRadius: '12px',
    // gap:          '8px',
    marginTop:    '30px',

    '&:hover': {
        color:           '#249599',
        backgroundColor: '#F3FCFE',
        borderColor:     '#249599',
    },

    '&.MuiButton-outlined': {
        textTransform: 'none',
    },
}));
