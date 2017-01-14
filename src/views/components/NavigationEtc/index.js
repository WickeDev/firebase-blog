import * as React from 'react'
import CardSection from '../CardSection'

class NavigationEct extends React.Component {

    signOut = () => {
        const {signOut} = this.props;
        signOut();
    };

    authenticationNavigation = () => {
        const {auth, router} = this.props;

        if (auth.get('authenticated')) {
            return <ul>
                <li>
                    <a onClick={::this.signOut}>로그아웃</a>
                </li>
                <li>
                    <a onClick={() => router.push('new-post')}>
                        새로운 포스팅
                    </a>
                </li>
                <li>
                    <a>카테고리 편집</a>
                </li>
            </ul>


        } else {
            return <ul>
                <li>
                    <a onClick={() => router.push('sign-in')}>
                        로그인
                    </a>
                </li>
            </ul>
        }
    };

    render() {
        return (
            <CardSection>
                <h1>그 밖의 기능</h1>
                {this.authenticationNavigation()}
            </CardSection>
        )
    }
}

export default NavigationEct;
