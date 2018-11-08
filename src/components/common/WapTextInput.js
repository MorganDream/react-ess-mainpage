import React from 'react';
import classNames from 'classnames';
import './WapTextInput.css';

class WapTextInput extends React.Component {
  render() {

    const {
      direction = 'row',
      sizeClassForOuter = 'full'
    } = this.props;
    const rootSizeClass = sizeClassForOuter + '-width-input';
    const inputGroupSizeClass = 'wap-text-input-width-size-' + sizeClassForOuter;

    return (
      <div className={classNames(
        'wap-text-input component wap-core-ui-waptextinput',
        'form-group',
        'direction-' + direction,
        rootSizeClass,
        {
          'hidden': this.props.display === false,
          'disabled': this.props.disabled,
          'readonly': this.props.readonly
        }
      )}
           id={this.props.id}>
        {
          (this.props.hasLabel ||
            this.props.keepLabelMargin ||
            this.props.isInputInner) &&
            <label className={classNames(
              'wap-text-input-label label-element control-label',
              {'must-column': this.props.required}
            )}>
              <span className={'lable-element-span'}>
                {this.props.labelValue}
              </span>
            </label>
        }
        <div className={classNames('input-parent', inputGroupSizeClass)}>
          <input className={classNames(
            'wap-text-input-inputbox wap-input-group-child',
            'form-control input-element-with-opt-icon',
            this.props.noShadowClass,
            {'form-input-clearmode': this.props.useClearButton}
          )}
                 id={this.props.id + '_target'}
                 autoComplete={'off'}
                 type={this.props.inputType}
                 readOnly={this.props.readonly}
                 disabled={this.props.disabled}
                 autoFocus={this.props.autoFocus}
                 placeholder={this.props.example || ''}
                 value={this.props.value}
                 tabIndex={this.props.readonly? -1 : ''}
                 name={this.props.nameKey}
                 maxLength={1000}/>
          {
            this.props.useClearButton &&
              <i className="form-input-clear-button" style={{display:'none'}}></i>
          }
          {
            this.props.useAutoComplete &&
            <div className="wap-text-input-suggestions ac-renderer"
                 style={{display:'none', maxHeight:this.props.suggestionsHeight + 'px'}}/>
          }
        </div>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default WapTextInput;