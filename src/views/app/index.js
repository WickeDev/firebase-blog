import * as React from "react";
import {browserHistory} from 'react-router'

class App extends React.Component {

    navigatePost = () => {
        browserHistory.push('/post');
    };

    render() {
        return <div className="App">
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <a className="navbar-brand" href="/">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active"
                           href="#"
                           onClick={::this.navigatePost}
                        >Home</a>
                    </div>
                </div>
            </nav>
            {this.props.children}
        </div>
    }
}


export default App;
