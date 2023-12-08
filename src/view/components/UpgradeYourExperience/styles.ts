// Core
import { Box, Button, Typography, styled } from '@mui/material';


export const Container = styled(Box)(() => ({
    backgroundColor: '#32AFB4',
    justifyContent:  'space-between',
}));

export const ContentSection = styled(Box)(() => ({
    padding: '0px 80px 20px 80px',
}));


export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize:   '40px',
    fontWeight: '700',
    lineHeight: '56px',
    color:      '#FFFFFF',

    [ theme.breakpoints.down('sm') ]: {
        fontSize:   '32px',
        lineHeight: '44.8px',
    },
}));

export const SectionText = styled(Typography)(() => ({
    fontSize:   '20px',
    fontWeight: '400',
    lineHeight: '28px',
    color:      '#FFFFFF',
    marginTop:  '20px',
}));

export const SectionButton = styled(Button)(({ theme }) => ({
    fontSize:     '20px',
    fontWeight:   '400',
    lineHeight:   '28px',
    color:        '#FFFFFF',
    borderColor:  '#FFFFFF',
    marginTop:    '20px',
    padding:      '16px 40px',
    borderRadius: '12px',
    gap:          '8px',

    [ theme.breakpoints.down('sm') ]: {
        width:    '100%',
        fontSize: '18px',
        padding:  '16px 28px',
    },

    '&:hover': {
        color:           '#249599',
        backgroundColor: '#FFFFFF',
        borderColor:     '#249599',

        '& svg path': {
            fill: '#249599',
        },
    },

    '&.MuiButton-outlined': {
        textTransform: 'none',
    },
}));

export const ScreenSection = styled(Box)(() => ({
    padding:         '80px 0px 80px 80px',
    backgroundColor: '#249599',
    display:         'flex',
}));

export const MobileScreenSection = styled(ScreenSection)(() => ({
    padding:        '32px 16px',
    alignItems:     'center',
    justifyContent: 'center',
}));

