import * as React from 'react'
import {Card} from 'react-toolbox/lib/card'

import * as styles from './styles.css'

class CardSection extends React.Component {

    render() {
        return (
            <Card>
                <div className={styles['card-padding']}>
                    {this.props.children}
                </div>
            </Card>
        )
    }
}

export default CardSection;