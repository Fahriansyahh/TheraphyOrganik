import { combineReducers } from "redux";
import Global from "./Global";
import Query from "./Products";
const reducer = combineReducers({ Global, Query })
export default reducer