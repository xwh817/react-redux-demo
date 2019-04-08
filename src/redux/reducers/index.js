import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

export default combineReducers({ counter, todos });