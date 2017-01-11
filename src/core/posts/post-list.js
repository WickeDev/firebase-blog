import {FirebaseList} from 'core/firebase'

import * as actionTypes from './action-types'
import {Post} from './post'

const path = 'posts';

export const postList = new FirebaseList({
    onAdd: actionTypes.createPostSuccess,
    onChange: actionTypes.updatePostSuccess,
    onLoad: actionTypes.loadPostSuccess,
    onRemove: actionTypes.deletePostSuccess
}, Post, path);

