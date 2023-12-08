// Core
import { Box, Button, Typography, styled } from '@mui/material';


export const Container = styled(Box)(({ theme }) => ({
    padding: '0 80px 32px 80px',

    [ theme.breakpoints.down('sm') ]: {
        padding:       '32px 16px',
        display:       'flex',
        flexDirection: 'column',
        gap:           '8px',
    },
}));

export const FooterMenu = styled(Box)(() => ({
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '10px',
}));

export const MenuButton = styled(Button)(() => ({
    fontSize:   '14px',
    fontWeight: '400',
    lineHeight: '19.6px',
    color:      '#1C1C1C',

    '&:hover': {
        color:           '#249599',
        backgroundColor: 'transparent',
    },

    '&.MuiButton-text': {
        textTransform: 'none',
    },
}));

export const FooterContent = styled(Box)(() => ({
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    marginTop:      '16px',
}));

export const FooterText = styled(Typography)(() => ({
    fontSize:   '12px',
    fontWeight: '400',
    lineHeight: '16.8px',
    color:      '#1C1C1C',
}));

export const SocialMedia = styled(Box)(() => ({
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-evenly',
    gap:            '16px',

    '& svg:hover path': {
        fill: '#249599',
    },
}));

