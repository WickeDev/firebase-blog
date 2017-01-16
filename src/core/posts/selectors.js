export const getPostsList = (state) => {
    const list = state.posts.get('list');
    let page = state.posts.get('page');

    if (list.size < page) {
        page = list.size;
    }

    return list.size === 0 ? list : list.setSize(page);
};