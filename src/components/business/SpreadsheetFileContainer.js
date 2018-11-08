import React from 'react';

import SpreadsheetFileList from './SpreadsheetFileList';
import SpreadsheetFileContentPanelListItem from "./SpreadsheetFileContentPanelListItem";

class SpreadsheetFileContainer extends React.Component{
    constructor(props){
        super(props);
        this.fileContenPanel_ = null;
    }

    render() {
        return (
            <div id={'spreadsheet-file-content'} className={'l-partition l-room l-col l-col-md-12 l-col-component-margin-s l-col-top-to-bottom l-grid-leaf'} >
                <SpreadsheetFileList id={'spreadsheet-file-room'} width={'100%'} height={1000}/>
                <SpreadsheetFileContentPanelListItem id={'dummy-content-panel-items'} className={'hidden'}/>
            </div>
        )
    }
}

export default SpreadsheetFileContainer;