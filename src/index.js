import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { ThemeProvider } from 'react-jss';
import defaultTheme from './themes/default';

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
