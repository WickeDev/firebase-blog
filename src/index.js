import 'bootstrap/scss/bootstrap.scss'
import 'views/styles/index.css'
import * as immutable from 'immutable'
import installDevTools from 'immutable-devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'

import App from 'views/app/index'
import Posts from 'views/container/posts'
import Post from 'views/container/post'


import configureStore from 'core/store';

installDevTools(immutable);
const {store, history} = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Posts}/>
                <Route path="post" component={Post}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
