import * as React from 'react'
import {Button} from 'react-toolbox/lib/button'

import * as authActionTypes from 'core/auth/action-types'


import CardSection from '../CardSection'
import * as styles from './styles.css'

class SignInForm extends React.Component {

    signInWithGithub = () => {
        const {signInWithGithub}= this.props;
        signInWithGithub()
    };

    signInWithGoogle = () => {
        const {signInWithGoogle, router}= this.props;
        signInWithGoogle().then(result => {
            if (result.type === authActionTypes.signInSuccess().type) {
                router.push('/');
            }
        });
    };

    signInWithTwitter = () => {
        const {signInWithTwitter}= this.props;
        signInWithTwitter();
    };


    render() {
        return (
            <section>
                <div className={styles['sign-in-container']}>
                    <CardSection>
                        {/*<Button
                            primary raised
                            className={styles['sign-in-button']}
                            onClick={::this.signInWithGithub}>
                            Github
                        </Button>*/}
                        <Button
                            primary raised
                            className={styles['sign-in-button']}
                            onClick={::this.signInWithGoogle}>
                            Google
                        </Button>
                        {/*<Button
                            primary raised
                            className={styles['sign-in-button']}
                            onClick={::this.signInWithTwitter}>
                            Twitter
                        </Button>*/}
                    </CardSection>
                </div>
            </section>
        )
    }
}

export default SignInForm;
