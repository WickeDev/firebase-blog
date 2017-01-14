import * as React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'

import App from './app'
import {NewPostPage, MainPage, SignInPage, ContentPage} from './pages'

export default function Root({history, store}) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={App}>
                    <IndexRoute component={MainPage}/>
                    <Route path='new-post' component={NewPostPage}/>
                    <Route path='sign-in' component={SignInPage}/>
                    <Route path='content/:key' component={ContentPage}/>
                </Route>
            </Router>
        </Provider>
    );
}