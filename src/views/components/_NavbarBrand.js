import * as React from 'react'

class NavbarBrand extends React.Component {

    render() {
        return (
            <a className="navbar-brand" {...this.props}>
                {this.props.children}
            </a>
        )
    }
}

export default NavbarBrand;
