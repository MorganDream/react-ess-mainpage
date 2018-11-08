import React from 'react';
import './SpreadSheetFileContentPanelListItem.css';

import classNames from 'classnames';

import WapButton from '../common/WapButton';

class SpreadsheetFileContentPanelListItem extends React.Component {
    constructor(props) {
        super(props);
        this.rootClasses = classNames({
            'spreadsheet-file-content-panel-item': true,
            'folder': this.props.isFolder,
            'file': !this.props.isFolder,
            [`${this.props.view}`]: true,
            [`${this.props.className}`]: true
        });
        this.thumnailPreviewClasses = classNames({
            'spreadsheet-file-content-panel-item-container': true,
            'thumbnail-preview':true,
            'folder': this.props.isFolder,
            'file': !this.props.isFolder,
        });
        this.preivewClasses = classNames({
            'spreadsheet-file-content-panel-item-container': true,
            'preview':true,
            'folder': this.props.isFolder,
            'file': !this.props.isFolder,
        });
        this.metadataClasses = classNames({
            'spreadsheet-file-content-panel-item-container': true,
            'metadata': true,
        });
        this.moreOpsClasses = classNames({
            'spreadsheet-file-content-panel-item-container': true,
            'more-ops': true,
        })
    }

    render() {
        return (
            <div id={this.props.id} className={this.rootClasses}>
                <div className={this.thumnailPreviewClasses} >
                    <img src={this.props.previewImageSource}
                         className={'spreadsheet-file-content-panel-item-thumbnail-image hidden'}/>
                    <i className={`spreadsheet-file-content-panel-item-thumbnail-icon ${this.iconClass}`} />
                </div>
                <div className={this.preivewClasses}>
                    <div className={"spreadsheet-file-content-panel-item-icon-or-image-div"} >
                        <i className={"spreadsheet-file-content-panel-item-icon-or-image-div-icon wap-icon-hue-ess ess"} />
                    </div>
                    <div className={"spreadsheet-file-content-panel-item-file-name-div"}>
                        <span className={"spreadsheet-file-content-panel-item-file-name-div-file-name"}>
                            {this.props.fileName}
                        </span>
                    </div>
                    {
                        this.props.isStared ?
                            (<div className={"spreadsheet-file-content-panel-item-star"}>
                                <WapButton id={this.props.id + '-star-button'} lable={"FAVORITE"} buttonType={"icon"}
                                           buttonSize={"small"} icon={"star"} hintarea={"bottom"} hintWrapText={"true"}
                                           colorStyle={"white"}/>
                            </div> ):
                            (<div className={"spreadsheet-file-content-panel-item-star"}>
                                <WapButton id={this.props.id + '-star-button'} lable={"UNFAVORITE"} buttonType={"icon"}
                                           buttonSize={"small"} icon={"star-empty"} hintarea={"bottom"}
                                           hintWrapText={"true"} colorStyle={"white"} visibility={"hidden"} />
                            </div>)
                    }
                </div>
                <div className={this.metadataClasses}>
                    {
                        this.props.owner &&
                        <div className={"spreadsheet-file-content-panel-item-owner-name-div"}>
                            <span
                                className={'spreadsheet-file-content-panel-item-owner-name-div-name'}>{this.isOwnedByMe_() ? 'Me' : this.props.owner}</span>
                        </div>
                    }{

                        this.props.modified &&
                        <div className={"spreadsheet-file-content-panel-item-date"}>
                            <span className={"spreadsheet-file-content-panel-item-date-text"}>{'lastModifiedTime'}</span>
                        </div>
                    }
                </div>
                <div className={"spreadsheet-file-content-panel-item-container more-ops"}>
                    <div className={"spreadsheet-file-content-panel-item-more-operation-container"}>
                        <div className={"spreadsheet-file-content-panel-item-more-operation-btn"}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    isOwnedByMe_() {
        const fakeUserId = 'morgan';
        return this.props.owner === fakeUserId;
    }
}

export default SpreadsheetFileContentPanelListItem;