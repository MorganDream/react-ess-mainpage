import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SpreadsheetFirstPageApp from './pages/SpreadsheetFirstPageApp';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers';
import initialState from './reducers/initialState';

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <SpreadsheetFirstPageApp />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if(module.hot) {
  module.hot.accept('./pages/SpreadsheetFirstPageApp', () => render(SpreadsheetFirstPageApp))
}
