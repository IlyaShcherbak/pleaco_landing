// Core
import { FC } from 'react';

// MUI
import { Theme, useMediaQuery } from '@mui/material';

// Imgages
import { AwayIcon } from '../../../assets/images/AwayIcon';
import screen from '../../../assets/images/Screen.png';
import screenMobile from '../../../assets/images/ScreenMobile.png';

// Styles
import * as S from './styles';


export const UpgradeYourExperience: FC = () => {
    const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

    return (
        <S.Container
            id = 'upgrade'
            style = { isSm ? {
                display: 'block',
            } : {
                display:             'grid',
                gridTemplateColumns: '4fr 1fr',
                alignItems:          'center',
            } }>
            <S.ContentSection
                style = { isSm ? {
                    padding: '32px 16px',
                } : {
                    padding: '0px 80px 20px 80px',
                } }>
                <S.SectionTitle variant = 'h2'>
                    Upgrade Your Experience with Pleaco Enterprise and Cloud
                </S.SectionTitle>
                <S.SectionText variant = 'subtitle1'>
                    Take Pleaco to the next level with our premium services. Get advanced support, robust enterprise
                    features, and the flexibility of the cloud
                </S.SectionText>

                <S.SectionButton
                    style = { isSm ? { marginRight: '0px' } : { marginRight: '32px' } }
                    variant = 'outlined'>
                    Discover Enterprise
                    {<AwayIcon/>}
                </S.SectionButton>
                <S.SectionButton
                    variant = 'outlined'>
                    Explore Cloud Options
                    {<AwayIcon />}
                </S.SectionButton>
            </S.ContentSection>

            {isSm ? (
                <S.MobileScreenSection>
                    <img
                        alt = 'Discover Enterprise'
                        src = { screenMobile }
                        style = {{ width: '-webkit-fill-available' }}
                    />
                </S.MobileScreenSection >
            ) : (
                <S.ScreenSection>
                    <img
                        alt = 'Discover Enterprise'
                        src = { screen }
                    />
                </S.ScreenSection >
            )}

        </S.Container>
    );
};

