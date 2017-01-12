import * as React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <nav
                className="navbar navbar-toggleable-md bg-faded"
                {...this.props}
            >
                {this.props.children}
            </nav>
        )
    }
}

export default Navbar;