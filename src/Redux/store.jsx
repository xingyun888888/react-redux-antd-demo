import {compose,createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
 import * as reducer from './reducer';
import hello from "./subReducer";

// let reducers = combineReducers(subReducers);
/*=================
    store.jsx
  中央数据处理器
==================*/
// var store = createStore(
//     combineReduces(hello),
//     applyMiddleware(thunk,logger)
// );
let buildStore = compose(
    applyMiddleware(thunk,logger)
)(createStore);

    export default buildStore(hello);
 // export default function configStore(initialState){
 //       return  buildStore(hello, initialState);
 //   }
//export default store;
