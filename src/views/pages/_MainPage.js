import * as React from "react";
import {connect} from "react-redux"
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'
import {createSelector} from 'reselect'

import {
    getPostsList, hasHiddenPosts,
    postsActions, postsActionTypes
} from "core/posts"
import {getAuth, authActions} from 'core/auth'
import {MainNavigation, MainContent} from 'views/components'

class MainPage extends React.Component {
    componentWillMount() {
        const {loadPost} = this.props;
        loadPost();
    }

    render() {
        return (<div>
                <MainContent
                    {...this.props}
                />
                <MainNavigation
                    {...this.props}
                />
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    getAuth, getPostsList, hasHiddenPosts,
    (auth, list, hasHiddenPosts) => ({
        auth, list, hasHiddenPosts
    }));


const mapDispatchToProps = (dispatch) => ({
    signOut: bindActionCreators(authActions.signOut, dispatch),
    loadPost: bindActionCreators(postsActions.loadPost, dispatch),
    loadMore: bindActionCreators(postsActionTypes.loadMore, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));
