import {postList} from './post-list'

export const createPost = (post) => (dispatch) => {
    return postList.push(post);
};

export const loadPost = () => (dispatch) => {
    postList.subscribe(dispatch)
};

export const deletePost = (key) => (dispatch) => {
    postList.remove(key);
};