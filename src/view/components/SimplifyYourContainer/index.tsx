// Core
import { FC, useEffect, useRef, useState } from 'react';

// MUI
import { Box, Theme, useMediaQuery } from '@mui/material';

// Components
import { BurgerMenu, Slider } from '..';

// Images
import whiteLogo from '../../../assets/images/white_logo.png';
import greenLogo from '../../../assets/images/green_logo.png';

// Styles
import * as S from './styles';
import { Background } from './Background';


export const SimplifyYourContainer: FC = () => {
    const [ isSticky, setIsSticky ] = useState(false);
    const refContainer = useRef<null | HTMLDivElement>(null);
    const refHeader = useRef<null | HTMLDivElement>(null);

    const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

    const handleScroll = () => {
        if (refContainer.current) {
            if (refContainer.current.clientHeight < window.scrollY) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerView = () => {
        if (isSm && !isSticky) {
            return (
                <>
                    <img
                        alt = 'Logo'
                        src = { whiteLogo }
                        style = {{ position: 'relative' }}
                    />
                    <BurgerMenu isStiky = { isSticky } />
                </>
            );
        } else if (isSm && isSticky) {
            return (
                <>
                    <img
                        alt = 'Logo'
                        src = { greenLogo }
                        style = {{ position: 'relative' }}
                    />
                    <BurgerMenu isStiky = { isSticky } />
                </>
            );
        } else if (!isSm && !isSticky) {
            return (
                <>
                    <img
                        alt = 'Logo'
                        src = { whiteLogo }
                        style = {{ position: 'relative' }}
                    />
                    <S.HeaderButton
                        variant = 'outlined'>
                        Start for Free
                    </S.HeaderButton>
                </>
            );
        }

        return (
            <>
                <img
                    alt = 'Logo'
                    src = { greenLogo }
                    style = {{ position: 'relative' }}
                />
                <S.HeaderButton
                    style = {{
                        borderColor: '#32AFB4',
                        color:       '#32AFB4',
                    }}
                    variant = 'outlined' >
                    Start for Free
                </S.HeaderButton>
            </>
        );
    };

    return (
        <Background>

            <S.Container
                ref = { refContainer }
                style = { isSm ? {
                    display:   'block',
                    textAlign: 'center',
                    padding:   '0 16px 32px 16px',

                } : {
                    display: 'grid',
                    padding: '32px 80px',
                } }>
                <div style = {{
                    height: isSticky ? `${refHeader.current && refHeader.current.clientHeight}px` : 'auto',
                }}>
                    <S.HeaderSection
                        position = { isSticky ? 'fixed' : 'static' }
                        ref = { refHeader }
                        style = { isSticky ? {
                            position:   'fixed',
                            top:        0,
                            left:       0,
                            width:      '100%',
                            background: '#FFFFFF',
                            padding:    '16px',
                        } : {
                            position: 'static',
                            padding:  '16px 0',
                        } }>

                        {headerView()}

                    </S.HeaderSection>
                </div>
                <S.ContentContainer>
                    <Box>
                        <S.SectionTitle variant = 'h1'>Simplify Your Container Experience</S.SectionTitle>
                        <S.SectionText variant = 'subtitle1'>
                            Discover the ease of our platform.
                            Begin your journey to streamlined container solutions today
                        </S.SectionText>
                        <S.GetStartedButton
                            variant = 'contained'>
                            Get Started
                        </S.GetStartedButton>
                    </Box>

                    <Slider />
                </S.ContentContainer>
            </S.Container>
        </Background>
    );
};

