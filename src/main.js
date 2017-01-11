import * as immutable from 'immutable'
import installDevTools from 'immutable-devtools'
import * as React from 'react'
import {render} from 'react-dom'

import 'views/styles/index.scss'
import Root from 'views/root'
import {authActions} from 'core/auth'
import configureStore from 'core/store';

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
    .catch(error => console.error(error));