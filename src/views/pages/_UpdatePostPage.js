import * as React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import {postsActions} from 'core/posts'
import {UpdatePostForm} from 'views/components'

class Post extends React.Component {
    componentWillMount() {
        const {loadPost} = this.props
        loadPost()
    }

    render() {
        return (
            <div>
                <UpdatePostForm {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = ({posts, auth}) => ({posts, auth})

const mapDispatchToProps = (dispatch) => ({
    loadPost: bindActionCreators(postsActions.loadPost, dispatch),
    updatePost: bindActionCreators(postsActions.updatePost, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
