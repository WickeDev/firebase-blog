import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import reducers from './reducers';

export default (initialState = {}) => {
    //noinspection JSCheckFunctionSignatures
    let middleware = applyMiddleware(thunk);


    if (process.env.NODE_ENV !== 'production') {
        // configure redux-devtools-extension
        // @see https://github.com/zalmoxisus/redux-devtools-extension
        const {devToolsExtension} = window;
        if (typeof devToolsExtension === 'function') {
            middleware = compose(middleware, devToolsExtension());
        }
    }

    const store = createStore(reducers, initialState, middleware);
    const history = syncHistoryWithStore(hashHistory, store);
    const {hot} = module;
    if (hot) {
        hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers').default);
        });
    }

    return {store, history};
};