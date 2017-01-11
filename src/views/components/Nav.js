import React from 'react'

export default class Nav extends React.Component {

    render() {
        return (
            <div className="navbar-nav" {...this.props}>
                {this.props.children}
            </div>
        )
    }
}