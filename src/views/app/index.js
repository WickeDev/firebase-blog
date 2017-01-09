import React, {Component} from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { browserHistory } from 'react-router'

class App extends Component {

    navigatePost =() =>{
        browserHistory.push('/post');
    };

    render() {
        return <div className="App">
            <Navbar
                staticTop
                className="bs-docs-nav"
            >

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Firebase Blog</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={2} onClick={::this.navigatePost}>Post</NavItem>
                </Nav>
            </Navbar>
            {this.props.children}
        </div>
    }
}


export default App;
