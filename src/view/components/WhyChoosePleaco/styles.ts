// Core
import { Box, Typography, styled } from '@mui/material';


export const Container = styled(Box)(() => ({
}));

export const SectionTitle1 = styled(Typography)(() => ({
    fontSize:   '40px',
    fontWeight: '700',
    lineHeight: '56px',
    color:      '#1C1C1C',
}));

export const AboutSection = styled(Box)(() => ({
    display:             'grid',
    gridAutoFlow:        'column',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    marginTop:           '64px',
}));


export const ImageBox = styled(Box)(() => ({
    width:           '100px',
    height:          '100px',
    backgroundColor: '#F9FAFB',
    display:         'flex',
    justifyContent:  'center',
    alignItems:      'center',
    borderRadius:    '50%',
    marginLeft:      'auto',
    marginRight:     'auto',
}));

export const BlockTitle = styled(Typography)(() => ({
    fontSize:   '20px',
    fontWeight: '700',
    lineHeight: '28px',
    color:      '#1C1C1C',
}));

export const BlockText = styled(Typography)(() => ({
    fontSize:   '14px',
    fontWeight: '400',
    lineHeight: '19.6px',
    color:      '#344054',
}));

