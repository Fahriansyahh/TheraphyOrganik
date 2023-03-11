import { combineReducers } from "redux";
import Global from "./Global";
import Query from "./Products";
import UpdateList from "./UpdateList";
const reducer = combineReducers({ Global, Query, UpdateList })
export default reducer