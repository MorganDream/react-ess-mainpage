import React from 'react';
import WapHeaderLabel from "../../common/WapHeaderLabel";
import WapSingleSelect from "../../common/WapSingleSelect";

class TitleContainerFloor extends React.Component {
    getSingleSelectItems = () =>
        [
            {index: 0, id: 'own-by-all', value: 'all', label: 'text.owned_by_all'},
            {index: 1, id: 'own-by-me', value: 'me', label: 'text.owned_by_me'},
            {index: 2, id: 'own-by-others', value: 'others', label: 'text.owned_by_others'},
            {index: 3, id: 'view-favorite-only', value: 'favorite', label: 'text.view_favorite_only'},
        ]

    render() {
        return (
            <div className={'title-container-floor'} >
                <div className={'title-container-content'} >
                    <div id={'ess-tab-title-floor'}
                         className={'l-partition l-room l-row l-row-content l-row-component-margin-s l-col-wrap l-row-left-to-right l-auto-padding wap-core-ui-container-standardcontainer '}>
                        <div id={'ess-tab-title-room'}
                             className={'l-partition l-room l-col l-col-md-6 l-col-component-margin-s l-col-top-to-bottom l-grid-leaf wap-core-ui-container-standardcontainer '}>
                            <WapHeaderLabel id={'ess-header-recent'}
                                            label={'text.recent_spreadsheet'}
                                            fontSize={'subhead'}
                                            autoPadding={false}
                                            colorType={'gray'}/>
                            <WapHeaderLabel id={'ess-header-filename'}
                                            label={'text.spreadsheets_by_title'}
                                            fontSize={'subhead'}
                                            autoPadding={false}
                                            display={"none"}
                                            colorType={'gray'}/>
                            <WapHeaderLabel id={'ess-header-search-result'}
                                            label={'text.spreadsheet_search_result'}
                                            fontSize={'subhead'}
                                            display={"none"}
                                            autoPadding={false}
                                            colorType={'gray'}/>
                        </div>
                        <div id={'ess-tab-tools-room'}
                             className={'l-partition l-room l-col l-col-md-6 l-col-component-margin-s l-col-right-to-left l-grid-leaf wap-core-ui-container-standardcontainer '} >
                            <WapSingleSelect id={'ess-filter-btn'}
                                             name={'name'}
                                             widthSize={'m'}
                                             selctedIndex={0}
                                             transparent={true}
                                             defaultEmptyLabel={'text.owned_by_all'}
                                             items={this.getSingleSelectItems()}/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default TitleContainerFloor;