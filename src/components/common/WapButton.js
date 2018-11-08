import React from 'react';
import classNames from 'classnames';

import './WapButton.css';

class WapButton extends React.Component {
    disable = () => {

    }

    constructor(props) {
        super(props);
        this.rootClassNames = classNames('wap-button', this.props.class,
            this.props.display, this.props.visibility);
        this.buttonClassNames = classNames('wap-button-button', 'wap-button-group-child',
            'wap-button' + this.props.typeClass, 'wap-button'+this.props.sizeClass,
            this.props.minWidthClass, this.props.maxWidthClass, 'wap-button' + this.props.colorStyle,
            'wap-button' + this.props.colorCss);
        this.iconClasses = classNames('wap-button-left-icon', 'wap-icon-' + this.props.icon);
    }

    render() {
        return (
            <div id={this.props.id} className={this.rootClassNames} >
                <button id={this.props.buttonId}
                        name={this.props.name}
                        className={this.buttonClassNames}
                        disabled={this.props.disabled}
                        value={this.props.value}
                        onClick={this.props.onClick}
                        onMouseEnter={this.props.onMouseEnter}
                        onMouseLeave={this.props.onMouseLeave}
                        onBlur={this.props.onBlur}
                        >
                    {
                        !!this.props.icon &&
                            <i className={this.iconClasses} />
                    }

                </button>
            </div>
        )
    }
}

export default WapButton;