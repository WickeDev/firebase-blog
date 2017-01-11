import React from 'react'

export default class NavbarBrand extends React.Component {

    render() {
        return (
            <a className="navbar-brand" {...this.props}>
                {this.props.children}
            </a>
        )
    }

}
