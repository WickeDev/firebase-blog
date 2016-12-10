import {List, Record} from 'immutable'
import {handleActions} from 'redux-actions'
import * as postsActions from './actions'

export const PostsState = new Record({
    list: new List(),
});

export const postsReducer = handleActions({
    [postsActions.createPostSuccess]: (state, {payload}) => {
        return state.merge({
            list: state.list.unshift(payload)
        })
    },
    [postsActions.deletePostSuccess]: (state, {payload}) => {
        return state.merge({
            list: state.list.filter(post => {
                return post.key !== payload.key;
            })
        })
    },
    [postsActions.loadPostSuccess]: (state, {payload}) => {
        return (state.set(
            'list', new List(payload.reverse())
        ))
    },
    [postsActions.updatePostSuccess]: (state, {payload}) => (state.merge({
        list: state.list.map(post => {
            return post.key === payload.key ? payload : post;
        })
    }))
}, new PostsState());

