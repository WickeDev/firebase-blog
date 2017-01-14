import * as React from 'react'

import NavigationCategory from '../NavigationCategory'
import NavigationEct from '../NavigationEtc'

import * as styles from './styles.css'


class MainNavigation extends React.Component {
    render() {
        return (
            <aside className={styles['side-bar']}>
                <div className={styles['navigation']}>
                    <NavigationCategory />
                </div>
                <div className={styles['navigation']}>
                    <NavigationEct
                        {...this.props}
                    />
                </div>
            </aside>
        )
    }
}

export default MainNavigation;
