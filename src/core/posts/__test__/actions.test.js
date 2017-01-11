import * as actionsTypes from 'src/core/posts/action-types'

describe('post authActions', () => {
    it('should be create post action be correct', () => {
        expect(actionsTypes.createPostSuccess()).toEqual({
            "type": "CREATE_POST_SUCCESS"
        })
    });

    it('should be update post action be correct', () => {
        expect(actionsTypes.updatePostSuccess()).toEqual({
            "type": "UPDATE_POST_SUCCESS"
        })
    });

    it('should be deletePost post action be correct', () => {
        expect(actionsTypes.deletePostSuccess()).toEqual({
            "type": "DELETE_POST_SUCCESS"
        })
    });

    it('should be laod post action be correct', () => {
        expect(actionsTypes.loadPostSuccess()).toEqual({
            "type": "LOAD_POST_SUCCESS"
        })
    })
});