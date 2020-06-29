import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { ThemeProvider } from 'react-jss';
import defaultTheme from './themes/default';
import TagManager from 'react-gtm-module';

// Initialise Google Tag Manager
TagManager.initialize({ gtmId: 'GTM-WWVT532' });

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
