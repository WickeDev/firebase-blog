import * as React from 'react'

class NavItem extends React.Component {

    render() {
        return (
            <a className="nav-item nav-link" {...this.props}>
                {this.props.children}
            </a>
        )
    }
}

export default NavItem;