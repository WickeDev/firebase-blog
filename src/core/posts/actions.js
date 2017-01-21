import {postList} from './post-list'

export const createPost = (post) => (dispatch) => {
    return postList.push(post);
};

export const loadPost = () => (dispatch) => {
    postList.subscribe(dispatch)
};

export const deletePost = (key) => (dispatch) => {
    return postList.remove(key);
};

export const updatePost = (key, value) => (dispatch) => {
    return postList.update(key, value);
};