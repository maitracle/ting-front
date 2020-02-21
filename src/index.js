import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootStore from './stores';
import SelsoListStore from './stores/SelsoListStore';


const selsoListStore = new SelsoListStore();
const root = new RootStore();

ReactDOM.render(
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
