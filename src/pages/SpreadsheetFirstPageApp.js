import React from 'react';
import ApplicationListView from '../components/business/ApplicationListView';
import GlobalNavigationHeader from '../components/business/GlobalNavigationHeader';
import NewApplicationFloatingButton from '../components/business/NewApplicationFloatingButton';
import './SpreadsheetFirstPageApp.css';
import './common.css';
import './row.css';
import './col.css';
import './search_apartment_latest.css';

class SpreadsheetFirstPageApp extends React.Component{
  render() {
    return (
      <div className="App">
        <GlobalNavigationHeader />
        <ApplicationListView />
        <NewApplicationFloatingButton />
      </div>
    );
  }
}

export default SpreadsheetFirstPageApp;
