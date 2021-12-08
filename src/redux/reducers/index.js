import { combineReducers } from "redux";
import account from './account';

const rootReducer = combineReducers({
    accounts: account
});

export default rootReducer;