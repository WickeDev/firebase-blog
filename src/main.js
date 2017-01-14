import * as immutable from 'immutable'
import installDevTools from 'immutable-devtools'
import * as React from 'react'
import {render} from 'react-dom'

import Root from 'views/Root.js'
import {authActions} from 'core/auth'
import configureStore from 'core/store';

import 'views/styles/main.css'

installDevTools(immutable);
const {store, history} = configureStore();


function view(Root) {
    render(<Root
            history={history}
            store={store}/>,
        document.getElementById('root')
    );
}

authActions.initAuth(store.dispatch)
    .then(() => view(Root))
    .catch(error => {
    });