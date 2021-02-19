import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import App from '@pages/Home';

import { StylesProvider } from '@material-ui/core/styles';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const container = document.querySelector('#app');

ReactDom.render(
    <StylesProvider>
        <App />
    </StylesProvider>,
    container
);