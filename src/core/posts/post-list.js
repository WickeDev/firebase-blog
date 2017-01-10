import * as actionTypes from 'core/posts/action-types'
import {FirebaseList} from 'core/firebase'
import {Post} from 'core/posts/post'
const path = 'posts';

export const postList = new FirebaseList({
    onAdd: actionTypes.createPostSuccess,
    onChange: actionTypes.updatePostSuccess,
    onLoad: actionTypes.loadPostSuccess,
    onRemove: actionTypes.deletePostSuccess
}, Post, path);

