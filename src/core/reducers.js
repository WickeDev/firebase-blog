import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

import {postsReducer} from './posts'
import {authReducer} from './auth'

export default combineReducers({
    auth: authReducer,
    posts: postsReducer,
    routing: routerReducer
});
