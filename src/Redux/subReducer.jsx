import {combineReducers} from 'redux';
import * as reducer from '../Component/hello/reducer';
import * as subReducer from "./reducer";
console.log(reducer);
let hello = combineReducers({...reducer,...subReducer});
export default hello;