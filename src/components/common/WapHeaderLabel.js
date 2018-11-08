import React from 'react';
import './WapHeaderLabel.css';

import classNames from 'classnames';

class WapHeaderLabel extends React.Component {
    constructor(props){
        super(props);
        const {
            type='type-none', fontSize='title', fontWeight='normal', colorType='default', display='displayed',
            visibility='visible', autoPadding=true, withLeftBorder=true,
            icon
        } = props;

        this.rootClasses = classNames({
            'component': true,
            'wap-header-label': true,
            ['wap-header-label-' + type]: true,
            ['wap-header-label-font-' + fontSize]: true,
            ['wap-header-label-font-weight-' + fontWeight]: true,
            ['wap-header-label-color-'+colorType]: true,
            'hidden': display === 'none',
            'invisible': !visibility,
            'with-left-border': withLeftBorder
        });
        this.iconClasses = classNames('wap-header-label-left-icon', icon)
    }

    render() {
        return (
            <div id={this.props.id}
                 className={this.rootClasses} >
                {
                    this.props.icon &&
                        <i className={this.iconClasses} />
                }
                {
                    this.props.globalization ?
                        <span className={classNames({
                            'wap-header-label-label': true,
                            'wap-header-label-left-margin': this.props.icon
                        })}>{this.props.globalization_label}
                        </span> :
                        this.props.label && this.props.label != '' &&
                        <span className={classNames({
                            'wap-header-label-label': true,
                            [this.props.nowrapContent]: true,
                            'wap-header-label-left-margin': this.props.icon
                        })}>{this.props.label}
                        </span>
                }
                <hr className={"wap-header-label-hr"} />
            </div>
        )
    }
}

export default WapHeaderLabel;