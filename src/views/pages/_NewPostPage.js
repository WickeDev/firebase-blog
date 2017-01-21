import * as React from 'react'
import {connect} from 'react-redux'

import {postsActions} from 'core/posts'
import {NewPostForm} from 'views/components'

class Post extends React.Component {

    render() {
        return (
            <div>
                <NewPostForm {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = ({posts, routing}) => ({
    posts,
})

const mapDispatchToProps = Object.assign(
    {},
    postsActions,
)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
