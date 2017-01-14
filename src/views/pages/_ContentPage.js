import * as React from 'react'
import {connect} from "react-redux"
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'

import {authActions} from 'core/auth'
import {postsActions} from 'core/posts'
import {MainNavigation, Content} from 'views/components'

class ContentPage extends React.Component {

    componentWillMount() {
        const {loadPost} = this.props;
        loadPost();
    }

    render() {
        return (
            <div>
                <Content
                    {...this.props}
                />
                <MainNavigation
                    {...this.props}
                />
            </div>
        )
    }
}

const mapStateToProps = ({posts, auth, routing}) => ({
    posts,
    auth,
    routing
});

const mapDispatchToProps = (dispatch) => ({
    signOut: bindActionCreators(authActions.signOut, dispatch),
    loadPost: bindActionCreators(postsActions.loadPost, dispatch),
    deletePost: bindActionCreators(postsActions.deletePost, dispatch),
});

export default  connect(mapStateToProps, mapDispatchToProps)(withRouter(ContentPage));