import React from 'react';
import SpreadsheetFileContentPanel from './SpreadsheetFileContentPanel';

class SpreadsheetFileList extends React.Component {
    render(){
        return (
            <div id={this.props.id} className={'spreadsheet-file-list'}
                 style={{width: this.props.width, height: this.props.height}}>
                <SpreadsheetFileContentPanel id={'content-panel'}
                                             dragDrop={false}
                                             mode={'workspace'}
                                             view={'list'}
                                             scroll={'content-scroll'}
                                             isHasFile={true}
                                             diabledInformation={'listThumbnail, ownerPicture'}/>
                <span id={'dict-untitle-spreadsheet'} style={{display:'none'}}>{'untitle_spreadsheet'}</span>
                <span id={'dict-own-by-me'} style={{display:'none'}}>{'me'}</span>
            </div>
        )
    }
}

export default SpreadsheetFileList;