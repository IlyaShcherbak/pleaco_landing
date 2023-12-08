// Core
import { Box, Button, Typography, styled } from '@mui/material';


export const Container = styled(Box)(() => ({
    padding: '0px 80px 20px 80px',
}));

export const HeaderSection = styled(Container)(({ theme }) => ({
    padding:        '20px 0px',
    display:        'flex',
    justifyContent: 'space-between',
    alignItems:     'center',
    position:       'relative',

    [ theme.breakpoints.down('sm') ]: {
        padding: '16px',
    },
}));

export const HeaderButton = styled(Button)(({ theme }) => ({
    fontSize:     '20px',
    fontWeight:   '400',
    lineHeight:   '28px',
    color:        '#FFFFFF',
    borderColor:  '#FFFFFF',
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
        backgroundColor: '#F3FCFE',
        borderColor:     '#249599',

        '& svg path': {
            fill: '#249599',
        },
    },

    '&.MuiButton-outlined': {
        textTransform: 'none',
    },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
    marginTop:           '100px',
    marginBottom:        '100px',
    display:             'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems:          'center',
    position:            'relative',


    [ theme.breakpoints.down('sm') ]: {
        display:       'flex',
        flexDirection: 'column',
        gap:           ' 64px',
    },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize:   '48px',
    fontWeight: '800',
    lineHeight: '67px',
    color:      '#FFFFFF',

    [ theme.breakpoints.down('sm') ]: {
        fontSize:   '32px',
        fontWeight: '800',
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

export const GetStartedButton = styled(Button)(() => ({
    fontSize:        '20px',
    fontWeight:      '400',
    lineHeight:      '28px',
    color:           '#FFFFFF',
    backgroundColor: '#344054',
    marginTop:       '20px',
    padding:         '16px 40px',
    borderRadius:    '12px',

    '&.MuiButton-contained': {
        textTransform: 'none',
    },

    '&:hover': {
        backgroundColor: '#32AFB4',
    },
}));
