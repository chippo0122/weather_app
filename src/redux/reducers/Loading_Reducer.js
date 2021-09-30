import { IS_LOADING } from "../constant";

const init = false;

export default function changeLoadingReducer (preState = init, action) {
    const {type, data} = action;

    switch(type) {
        case IS_LOADING:
            return data;
        default:
            return preState;
    }
}