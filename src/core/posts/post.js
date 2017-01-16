import {Record} from 'immutable'

export const Post = new Record({
    key: null,
    author: null,
    title: null,
    content: null,
    createTime: null,
    tags: [],
    category: [],
});
