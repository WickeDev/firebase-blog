import * as React  from 'react'
import cx from 'classnames'

class Button extends React.Component {
    static props = {
        color: React.PropTypes.string |
        React.PropTypes.arrayOf(React.PropTypes.string),
    };

    render() {
        const {color}= this.props;

        return (
            <button
                type="button"
                className={cx("btn", color)}
                {...this.props}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;