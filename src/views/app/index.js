import * as React from "react";
import {browserHistory} from 'react-router'
import AppBar from 'react-toolbox/lib/app_bar'

import * as styles from './styles.css'

class App extends React.Component {

    navigatePost = () => {
        browserHistory.push('/post');
    };

    render() {
        return <div className={styles['app']}>
            <div className={styles['site-container']}>
                <header className={styles['site-header']}>
                    <AppBar title={<a href="/">Code Sanctum</a>}/>
                </header>
                {this.props.children}
            </div>
        </div>
    }
}


export default App;
