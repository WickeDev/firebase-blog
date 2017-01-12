import * as React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'

import App from './app'
import {Post, Posts} from './container'

export default function Root({history, store}) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Posts}/>
                    <Route path="post" component={Post}/>
                </Route>
            </Router>
        </Provider>
    );
}