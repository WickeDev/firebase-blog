import * as React from 'react'

class Nav extends React.Component {

    render() {
        return (
            <div className="navbar-nav"
                 {...this.props}>
                {this.props.children}
            </div>
        )
    }
}

export default Nav;