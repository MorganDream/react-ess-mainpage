import React from 'react';
import './SpreadsheetFileContentPanel.css';

import SpreadsheetFileContentPanelListItem from './SpreadsheetFileContentPanelListItem';

import classNames from 'classnames';

class SpreadsheetFileContentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.rootClasses = classNames({
            'spreadsheet-file-content-panel': true,
            [`${this.props.mode}`]: true,
            [`${this.props.scroll}`]: true,
            [`${this.props.view}`]: true,
            'file-info-panel-shown': this.props.isInfoPanelShown
        });
        this.bodyClasses = classNames('spreadsheet-file-content-panel-body', this.props.mode);
        this.folderSectionClasses = classNames({
            'spreadsheet-file-content-panel-folder-section': true,
            'hidden': !this.props.isHasFolder
        });
        this.fileSectionClasses = classNames({
            'spreadsheet-file-content-panel-file-section': true,
            'hidden': !this.props.isHasFile
        });
        this.nofilesAvailableClasses = classNames({
            'spreadsheet-file-content-panel-no-files-available': true,
            'hidden': !this.props.isContentEmpty
        })
    }

    render() {
        return (
            <div id={this.props.id} className={this.rootClasses} >
                <div className={this.bodyClasses}>
                    <div className={'spreadsheet-file-content-panel-body-content'} >
                        <div className={this.folderSectionClasses}>
                            <SpreadsheetFileContentPanelListItem id={`${this.props.id}-folder-section`}
                                                                 disabledInformation={this.props.disabledInformation} />
                        </div>
                        <div className={this.fileSectionClasses}>
                            <SpreadsheetFileContentPanelListItem id={`${this.props.id}-file-section`}
                                                                 view={this.props.view}
                                                                 fileName={'Test File First'}
                                                                 isFolder={false}
                                                                 owner={'morgan'}
                                                                 modified={true}
                                                                 disabledInformation={this.props.disabledInformation} />
                            <SpreadsheetFileContentPanelListItem id={'Test'} isStared={true}
                                                                 fileName={'Test File'} isFolder={false}
                                                                 owner={'Jack'}
                                                                 modified={true}
                                                                 view={this.props.view}/>
                        </div>
                        <div className={this.nofilesAvailableClasses}>
                            <div className={'spreadsheet-file-content-panel-no-files-available-content'} >
                                <i className={'spreadsheet-file-content-panel-no-files-available-content-icon wap-icon-cloud'} />
                                <span className={'spreadsheet-file-content-panel-no-files-available-content-span'}>
                                    {'No files Available Text'}
                                </span>
                            </div>
                        </div>
                        <div className={"spreadsheet-file-content-panel-drag-element-container hidden"}>
                            <div className={"spreadsheet-file-content-panel-drag-element-wrapper"}>
                                <div className={"spreadsheet-file-content-panel-drag-element-holder front"}>
                                    <div className={"spreadsheet-file-content-panel-drag-element"}></div>
                                </div>
                                <div className={"spreadsheet-file-content-panel-drag-element-holder back"}>
                                    <div className={"spreadsheet-file-content-panel-drag-element"}></div>
                                </div>
                                <div className={"spreadsheet-file-content-panel-drag-element-initializer"}></div>
                                <div className={"spreadsheet-file-content-panel-drag-element-total-count"}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpreadsheetFileContentPanel;