import * as postActions from 'core/posts/actions'

describe('post actions', () => {
    it('should be create post action be correct', () => {
        expect(postActions.createPostSuccess()).toEqual({
            "type": "CREATE_POST_SUCCESS"
        })
    });

    it('should be update post action be correct', () => {
        expect(postActions.updatePostSuccess()).toEqual({
            "type": "UPDATE_POST_SUCCESS"
        })
    });

    it('should be deletePost post action be correct', () => {
        expect(postActions.deletePostSuccess()).toEqual({
            "type": "DELETE_POST_SUCCESS"
        })
    });

    it('should be laod post action be correct', () => {
        expect(postActions.loadPostSuccess()).toEqual({
            "type": "LOAD_POST_SUCCESS"
        })
    })
});