import React from 'react';
import classNames from 'classnames';
import './WapInputGroup.css';

class WapInputGroup extends React.Component {
  render() {

    const {
      searchStyle = false,
      hasFullWidthInput = true,
    } = this.props;

    return (
      <div id={this.props.id}
           className={classNames(
             'wap-input-group component wap-core-ui-wapinputgroup',
             {
               'hidden': this.props.display === false,
               'full-width-input': hasFullWidthInput,
               'wap-input-group-search-style': searchStyle
             }
           )}>
        {this.props.children}
      </div>
    )
  }
}


export default WapInputGroup;