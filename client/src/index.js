import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ducks
import store from './store';
import { Provider } from 'react-redux'

import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

const rootElement = document.getElementById( 'root' );

const getLibrary = ( provider ) => {
    return new Web3( provider );
};

const render = () => {
    ReactDOM.render(
        <Web3ReactProvider getLibrary={ getLibrary }>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </Web3ReactProvider>
        , rootElement
    );
};

render( App );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
