import * as React from 'react'

import {connect} from "react-redux"
import {bindActionCreators} from 'redux'

import {authActions} from "core/auth"
import {SignInForm} from 'views/components'


class SignIn extends React.Component {

    render() {
        return (
            <div>
                <SignInForm {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = ({auth}) => ({
    auth,
});

const mapDispatchToProps = (dispatch) => ({
    signInWithGithub: bindActionCreators(authActions.signInWithGithub, dispatch),
    signInWithGoogle: bindActionCreators(authActions.signInWithGoogle, dispatch),
    signInWithTwitter: bindActionCreators(authActions.signInWithTwitter, dispatch),
    signOut: bindActionCreators(authActions.signOut, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);