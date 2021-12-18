import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware,compose} from 'redux'
import App from './components/app'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const composeEnhancers = Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers,{}, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.querySelector('#root')
)

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);

*/