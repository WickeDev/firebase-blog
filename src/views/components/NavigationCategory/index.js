import * as React from 'react'

import CardSection from '../CardSection'

class NavigationCategory extends React.Component {

    render() {
        return (
            <CardSection>
                <h1>카테고리</h1>
                <ul>
                    <li><a>uncatalogued</a></li>
                    <li><a>데이터베이스(Database)</a></li>
                    <li><a>보안(Security)</a></li>
                    <li><a>분산(Distributed Computing)</a></li>
                    <li><a>영감(Emotion)</a></li>
                    <li><a>웹(Web)</a></li>
                    <li><a>프로그래밍 언어(Programming Language)</a></li>
                </ul>
            </CardSection>
        )
    }
}

export default NavigationCategory;
