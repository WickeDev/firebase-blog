import immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/app/index';
import 'views/styles/index.css';
import {Provider} from 'react-redux'
import configureStore from 'core/store';

installDevTools(immutable);
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
