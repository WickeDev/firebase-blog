import * as postsActions from 'core/posts/actions'
import {FirebaseList} from 'core/firebase'
import {Post} from 'core/posts/post'
const path = 'posts';

export const postList = new FirebaseList({
    onAdd: postsActions.createPostSuccess,
    onChange: postsActions.updatePostSuccess,
    onLoad: postsActions.loadPostSuccess,
    onRemove: postsActions.deletePostSuccess
}, Post, path);

