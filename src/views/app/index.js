import * as React from "react";
import {browserHistory} from 'react-router'

import {Navbar, NavbarBrand, Nav, NavItem} from 'views/components'

class App extends React.Component {

    navigatePost = () => {
        browserHistory.push('/post');
    };

    render() {
        return <div className="App">
            <Navbar>
                <NavbarBrand href="/">Blog</NavbarBrand>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Nav>
                        <NavItem
                            href=""
                            onClick={::this.navigatePost}>
                            Post
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
            {this.props.children}
        </div>
    }
}


export default App;
