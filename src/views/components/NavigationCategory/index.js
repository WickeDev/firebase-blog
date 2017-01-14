import * as React from 'react'

import CardSection from '../CardSection'

class NavigationCategory extends React.Component {

    render() {
        return (
            <CardSection>
                <h1>카테고리</h1>
                <ul>
                    <li>uncatalogued</li>
                    <li>데이터베이스(Database)</li>
                    <li>보안(Security)</li>
                    <li>분산(Distributed Computing)</li>
                    <li>영감(Emotion)</li>
                    <li>웹(Web)</li>
                    <li>프로그래밍 언어(Programming Language)</li>
                </ul>
            </CardSection>
        )
    }
}

export default NavigationCategory;
