import React from 'react';
import './SearchSuggest.css';
import WapInputGroup from "./WapInputGroup";
import WapTextInput from "./WapTextInput";

class SearchSuggest extends React.Component {
  render() {
    return (
      <div id={this.props.id} className={'search-suggest'}>
        <div id={this.props.id + '-box-container'} className={'search-suggest-box-container'}>
          <div className={'search-suggest-box-container-input-container'}>
            <WapInputGroup id={this.props.id + '-group'} searchStyle={true}>
              <WapTextInput id={this.props.id + '-box'}
                            name={''}
                            widthSize={'full'}
                            example={this.props.example}
                            suggestCount={5}
                            useClearButton={true}/>
            </WapInputGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchSuggest;