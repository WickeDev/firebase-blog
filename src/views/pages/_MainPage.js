import * as React from "react";
import {connect} from "react-redux"
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'

import {postsActions} from "core/posts"
import {authActions} from 'core/auth'
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

const mapStateToProps = ({posts, auth}) => ({
    posts,
    auth
});

const mapDispatchToProps = (dispatch) => ({
    signOut: bindActionCreators(authActions.signOut, dispatch),
    loadPost: bindActionCreators(postsActions.loadPost, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));
