// Core
import React, { FC, useEffect, useCallback } from 'react';
import styled from 'styled-components';

// Routes
import { Routes } from './routes';

// Hooks
import { useTogglesRedux } from '../bus/client/toggles';

// Assets
import { GlobalStyles } from '../assets';
import { ThemeProvider, createTheme } from '@mui/material';

// Static
import { lightTheme } from '../init';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100%;
`;

export const App: FC = () => {
    const { setToggleAction: setTogglerAction } = useTogglesRedux();

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    const theme = createTheme(lightTheme);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <ThemeProvider theme = { theme }>
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
