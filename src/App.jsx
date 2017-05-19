import React,{Component,PropTypes} from 'react';
import {Provider,connect} from 'react-redux';
import ReactDOM, {render} from 'react-dom';
import store from './Redux/store'
import router from './Router/router'

import './Style/comm.scss'
// store.subscribe(() => {
//
// });

console.log(store.getState());

render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);
