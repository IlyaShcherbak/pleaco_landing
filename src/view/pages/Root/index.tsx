// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, SimplifyYourContainer, WhyChoosePleaco, UpgradeYourExperience, LandingFooter } from '../../components';

// Styles
import { Container } from './styles';

const Root: FC = () => {
    return (
        <Container>
            <SimplifyYourContainer/>
            <WhyChoosePleaco/>
            <UpgradeYourExperience/>
            <LandingFooter/>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
