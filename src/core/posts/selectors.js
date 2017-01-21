import {createSelector} from 'reselect'


export const getPostsList = (state) => {
    const list = state.posts.get('list')
    let page = state.posts.get('page')

    if (list.size < page) {
        page = list.size
    }

    return list.size === 0 ? list : list.setSize(page)
}

export const getPost = createSelector(getPostsList, () => ({}))

/*(state) => {
 const list = state.posts.get('list');
 let page = state.posts.get('page');

 if (list.size < page) {
 page = list.size;
 }

 return list.size === 0 ? list : list.setSize(page);
 };*/

export const hasHiddenPosts = (state) => {
    const list = state.posts.get('list')
    let page = state.posts.get('page')

    return list.size > page
}