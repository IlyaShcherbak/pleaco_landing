// Core
import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 3s linear;    
`;

export const ActiveBackgroundImage = styled(BackgroundImage)`
    opacity: 1;
    transition: opacity 3s linear;    
`;
