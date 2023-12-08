// Core
import { FC } from 'react';

// MUI
import { Divider, Theme, useMediaQuery } from '@mui/material';

// Imgages
import { Github } from '../../../assets/images/socials/Github';
import { XIcon } from '../../../assets/images/socials/XIcon';
import { Linkedin } from '../../../assets/images/socials/Linkedin';

// Styles
import * as S from './styles';


export const LandingFooter: FC = () => {
    const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

    return (
        <S.Container>
            <S.FooterMenu
                style = { isSm ? {
                    flexDirection: 'column',
                } : {
                    flexDirection: 'row',
                } }>
                <S.MenuButton
                    variant = 'text'>
                    About
                </S.MenuButton>
                <S.MenuButton
                    variant = 'text'>
                    Blog
                </S.MenuButton>
                <S.MenuButton
                    variant = 'text'>
                    Jobs
                </S.MenuButton>
                <S.MenuButton
                    variant = 'text'>
                    Documentation
                </S.MenuButton>
            </S.FooterMenu>

            <Divider/>

            <S.FooterContent
                style = { isSm ? {
                    flexDirection: 'column-reverse',
                    gap:           '32px',
                } : {
                    flexDirection: 'row',
                } }>
                <S.FooterText
                    variant = 'body2'>
                    © 2023 Pleaco. All Rights Reserved.
                </S.FooterText>
                <S.SocialMedia>

                    <Github/>
                    <XIcon/>
                    <Linkedin />

                </S.SocialMedia>
            </S.FooterContent>
        </S.Container>
    );
};

