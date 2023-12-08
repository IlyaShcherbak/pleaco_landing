// Core
import { FC } from 'react';

// MUI
import { Box, Theme, useMediaQuery } from '@mui/material';

// Imgages
import reliability from '../../../assets/images/reliability.png';
import gears from '../../../assets/images/gears.png';
import eye from '../../../assets/images/eye.png';
import lock from '../../../assets/images/lock.png';

// Styles
import * as S from './styles';


export const WhyChoosePleaco: FC = () => {
    const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

    return (
        <S.Container
            style = { isSm ? {
                padding:   '32px 16px',
                textAlign: 'center',
            } : {
                padding:   '32px 80px 20px 80px',
                textAlign: 'center',
            } }>
            <S.SectionTitle1 variant = 'h2'>Why Choose Pleaco?</S.SectionTitle1>
            <S.AboutSection
                style = { isSm ? {
                    display: 'block',
                } : {
                    display: 'grid',
                } }>
                <Box>
                    <S.ImageBox>
                        <img
                            alt = 'Rock-Solid Reliability'
                            src = { reliability }
                        />
                    </S.ImageBox>
                    <S.BlockTitle>
                        Rock-Solid Reliability
                    </S.BlockTitle>
                    <S.BlockText>
                        Pleaco's approach guarantees uninterrupted performance without complex setups
                    </S.BlockText>
                </Box>

                <Box>
                    <S.ImageBox>
                        <img
                            alt = 'Ease of operation'
                            src = { gears }
                        />
                    </S.ImageBox>
                    <S.BlockTitle>
                        Ease of operation
                    </S.BlockTitle>
                    <S.BlockText>
                        Add or remove nodes in seconds with no hassle
                    </S.BlockText>
                </Box>

                <Box>
                    <S.ImageBox>
                        <img
                            alt = 'Total Visibility'
                            src = { eye }
                        />
                    </S.ImageBox>
                    <S.BlockTitle>
                        Total Visibility
                    </S.BlockTitle>
                    <S.BlockText>
                        Metrics, logs, traces – all you need for all your containers
                    </S.BlockText>
                </Box>

                <Box>
                    <S.ImageBox>
                        <img
                            alt = 'Security'
                            src = { lock }
                        />
                    </S.ImageBox>
                    <S.BlockTitle>
                        Security
                    </S.BlockTitle>
                    <S.BlockText>
                        Advanced security features like secret management and container scanning are integral to Pleaco
                    </S.BlockText>
                </Box>

            </S.AboutSection>
        </S.Container>
    );
};

