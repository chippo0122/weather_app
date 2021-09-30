import { combineReducers } from "redux";
import main from './reducers/Main_Reducer'
import search from './reducers/Search_Reducer'
import loading from './reducers/Loading_Reducer'
export default combineReducers({
    citysList: main,
    currentCity: search,
    loading: loading
});

