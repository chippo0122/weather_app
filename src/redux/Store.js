import {createStore, applyMiddleware} from 'redux'
import AllReducer from './AllReducer'
import thunk from 'redux-thunk'
export default createStore(AllReducer, applyMiddleware(thunk));