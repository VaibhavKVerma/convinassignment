import { combineReducers } from "redux";

import getFullList from "./getFullList";
import getSingleUser from "./getSingleUser";

const reducer = combineReducers({ getFullList, getSingleUser });

export default reducer;
