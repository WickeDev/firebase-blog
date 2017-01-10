import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import {postsReducer} from 'core/posts'
import {authReducer} from 'core/auth'


export default combineReducers({
    auth: authReducer,
    posts: postsReducer,
    routing: routerReducer
});
