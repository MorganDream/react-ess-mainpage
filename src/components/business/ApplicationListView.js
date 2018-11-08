import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SpreadsheetFileContainer from "./SpreadsheetFileContainer";
import SpreadsheetFirstpageEssTab from "./SpreadsheetFirstpageEssTab";
import TitleContainerFloor from "./SpreadSheetApplicationView/TitleContainerFloor";
import WapInputGroup from "../common/WapInputGroup";
import SearchSuggest from "../common/SearchSuggest";
// import actions
const mockActions = function(){
    return {
        type:'mock'
    }
}

function mapStateToProps(state) {
    return {
        onlyStatesThatINeedFromStore: state.whatINeed
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionDispatcher: bindActionCreators(mockActions)
    }
}

class ApplicationListView extends React.PureComponent {
    render(){
        return (
            <div id={'l_search_apartment_latest'}
                 className={'l-apartment l-search-apartment-latest ' +
                 'widget-none sidemenu-visible' +
                 ' wap-core-ui-layout-searchapartmentlatest'}>
                <div id={'l_main_floor'}
                     className={'l-floor l-main-floor'} >
                    <div id={'l_result_floor'}
                         className={'l-floor l-result-floor'}>
                        <div id={'l_result_room'}
                             className={'l-room l-result-room ' +
                             'wap-core-ui-container-standardcontainer tab-one-tab'}>
                            <div id="search-container-room">
                                <WapInputGroup id={'search-input-group'}>
                                    <SearchSuggest id="spreadsheet-first-page-search-input"
                                                   globalization="true"
                                                   example="text.hint.open_file_input"/>
                                </WapInputGroup>
                            </div>
                            <div id="ess-tab" className={'tab active'}>
                                <TitleContainerFloor/>
                                <SpreadsheetFirstpageEssTab />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ApplicationListView);