import {postList} from 'core/posts/post-list'

export const createPost = (post) => (dispatch) => {
    postList.push(post);
};

export const loadPost = () => (dispatch) => {
    postList.subscribe(dispatch)
};