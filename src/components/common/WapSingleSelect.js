import React from 'react';
import './WapSingleSelect.css';

import classNames from 'classnames';

class WapSingleSelect extends React.Component {
    constructor(props) {
        super(props);

        const {
            classes, isInvisible, direction='row', disabled,
            readonly, isHidden, optionDivider, required,
            sizeClass, transparentCss='wap-single-select-button-transparent '
        } = props;

        this.rootClasses = classNames({
            'component': true,
            'form-group': true,
            'wap-single-select': true,
            [`direction-${direction}`]: true,
            'disabled': disabled,
            'readonly': readonly,
            'wap-single-select-hide-divider': !optionDivider
        });
        this.labelClasses = classNames({
            'wap-single-select-label': true,
            'label-element': true,
            'must-column': required || required == 1
        });
        this.readOnlyClasses = classNames({
            'input-parent': true,
            [sizeClass]: true,
            'display-none': !readonly
        });
        this.editableClasses = classNames({
            'input-parent': true,
            [sizeClass]: true,
            [transparentCss]: true,
            'display-none': readonly
        });
    }

    state = {
        selectedIndex: 0,
        spreaded: false,
        hoveringIndex: -1,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.selectedIndex !== prevState.selectedIndex) {
            return {
                selecetedIndex: nextProps.selectedIndex
            }
        }
        return null;
    }

    render() {
        const ulClasses = classNames({
            'wap-single-select-option': true,
            'wap-single-select-up': this.props.listPosition == 'top',
            'hidden': !this.state.spreaded
        });

        return (
            <div id={this.props.id}
                 className={this.rootClasses}
                 name={this.props.name}>
                {
                    this.props.existLabel || this.props.keepLabelMargin &&
                    <label className={this.labelClasses}>{this.props.label}</label>
                }
                <label className={this.readOnlyClasses} >
                    <span className={'wap-single-select-readonly wap-single-select-caption '} />
                </label>
                <div className={this.editableClasses} >
                    <button className={'wap-single-select-input wap-input-group-child form-control'}
                            autoFocus={this.props.autoFocus}
                            onClick={this.onButtonClicked_.bind(this)}
                            onBlur={this.onButtonBlured_.bind(this)}>
                        <span className={"wap-single-select-caption"}>
                            {this.props.items[this.state.selectedIndex].label}
                        </span>
                        <span className={"wap-single-select-icon wap-icon-angle-down"}/>
                    </button>
                    <ul className={ulClasses} style={{ maxHeight: `${this.props.optionHeight}px`}} >
                        {
                            this.props.useAllOptions &&
                            <li className={'wap-single-select-item'} >{this.props.allOptionLabel} </li>
                        }
                        {
                            this.props.items.map(item => <li key={item.index}
                                                             id={item.id}
                                                             className={classNames({
                                                                'wap-single-select-item': true,
                                                                'divider': item.isDivider,
                                                                'selected': item.index === this.state.selectedIndex,
                                                                 'selecting': item.index !== this.state.selectedIndex &&
                                                                            item.index === this.state.hoveringIndex
                                                             })}
                                                             onMouseOver={e => {
                                                                 this.setState({hoveringIndex: item.index});
                                                             }}
                                                             onMouseLeave={e => {
                                                                 this.setState({hoveringIndex: -1})
                                                             }}>
                                    <span>{item.label}</span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    onButtonClicked_(e) {
        this.setState(prevState => {
            return {
                spreaded: !prevState.spreaded
            }
        });
    }

    onButtonBlured_(e){
        if(this.state.hoveringIndex >= 0) {
            this.setState(prevState => {
                return {
                  hoveringIndex: -1,
                  selectedIndex: prevState.hoveringIndex
                }
            })
        }

        this.hideOptions_();
    }

    hideOptions_(){
        if (!this.state.spreaded) {
            return;
        }
        this.setState({
            spreaded: false
        })
    }
}

export default WapSingleSelect;