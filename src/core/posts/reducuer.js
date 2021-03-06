import {List, Record} from 'immutable'
import {handleActions} from 'redux-actions'

import * as actionTypes from './action-types'

export const PostsState = new Record({
    list: new List(),
    category: null,
    page: 5
});

export const postsReducer = handleActions({
        [actionTypes.createPostSuccess]: (state, {payload}) => {
            return state.merge({
                list: state.list.unshift(payload)
            })
        },
        [actionTypes.deletePostSuccess]: (state, {payload}) => {
            return state.merge({
                list: state.list.filter(post => {
                    return post.key !== payload.key;
                })
            })
        },
        [actionTypes.loadPostSuccess]: (state, {payload}) => {
            return (state.set(
                'list', new List(payload.reverse())
            ))
        },
        [actionTypes.updatePostSuccess]: (state, {payload}) => (state.merge({
            list: state.list.map(post => {
                return post.key === payload.key ? payload : post;
            })
        })),
        [actionTypes.loadMore]: (state) => {
            const increment = (state.page + 5);
            const listSize = state.list.size;
            const size = listSize >= increment ? increment : listSize;
            return state.setIn(['page'], size);
        }
    },
    new PostsState()
);

