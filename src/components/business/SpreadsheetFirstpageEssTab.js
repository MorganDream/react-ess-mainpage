import React from 'react';
import SpreadsheetFileContainer from "./SpreadsheetFileContainer";

class SpreadsheetFirstpageEssTab extends React.Component{
    render() {
        return (
            <div id={'ess-panel-container'}
                 className={'l-partition l-room l-col l-col-md-12 l-col-component-margin-s l-col-top-to-bottom wap-ri-spreadsheet-firstpage-esstab '}>
                <div id={'spreadsheet-content-panel'}
                     className={'l-partition l-room l-col l-col-md-12 l-col-component-margin-s l-col-top-to-bottom wap-spreadsheet-container-spreadsheetsearchpanel '}>
                    <SpreadsheetFileContainer />
                    <div className={'load-more-footer display-none'} >
                        <label id={'spreadsheet-search-panel-load-more-footer'}>
                            {'load_more'}
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpreadsheetFirstpageEssTab;