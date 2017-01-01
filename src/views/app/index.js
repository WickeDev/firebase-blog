import React, {Component} from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class App extends Component {

    render() {
        return <div className="App">
            <Navbar
                staticTop
                role="banner"
                className="bs-docs-nav"
            >

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Firebase Blog</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={2} href="post">Post</NavItem>
                </Nav>
            </Navbar>
            {this.props.children}
        </div>
    }
}


export default App;
