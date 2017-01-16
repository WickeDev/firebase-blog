import {createAction} from 'redux-actions'

export const createPostSuccess = createAction('CREATE_POST_SUCCESS');
export const updatePostSuccess = createAction('UPDATE_POST_SUCCESS');
export const loadPostSuccess = createAction('LOAD_POST_SUCCESS');
export const deletePostSuccess = createAction('DELETE_POST_SUCCESS');
export const loadMore = createAction('LOAD_MORE');
