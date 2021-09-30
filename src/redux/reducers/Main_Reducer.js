import { ADD_NEW_CITY, REMOVE_CITY } from "../constant";

const init = [] ;

export default function mainReducer (preState = init, action) {
    const {type, data} = action;

    switch (type) {
        case ADD_NEW_CITY: 
            return [...preState, data];
        case REMOVE_CITY:
            let arr = [];
            const {lat, lon } = data;
            for(let i = 0; i < preState.length; i ++) {
                if(preState[i].lat === lat && preState[i].lon === lon) {
                    continue;
                }
                arr.push(preState[i]);
            }
            return arr
        default:
            return preState
    }
}