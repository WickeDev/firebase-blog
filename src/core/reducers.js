import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import {postsReducer} from 'core/posts'


export default combineReducers({
    posts: postsReducer,
    routing: routerReducer
});
