import { ADD_NEW_CITY, REMOVE_CITY, CHANGE_CURRENT_CITY, IS_LOADING } from "./constant"
import Axios from 'axios'
import { ONE_CALL_URL, KEY } from "../api_config"


const createAddNewCityAction = (data) => {
    return { type: ADD_NEW_CITY, data }
}

const createRemoveCityAction = (data) => {
    //data should be a object of contains lat & lon
    return {type: REMOVE_CITY, data}
}

const createChangeCurrentCityAction = (data) => {
    return { type: CHANGE_CURRENT_CITY, data }
}

const createAddCurrentCityWeatherAction = (data) => {
    return (dispatch) => {
        const { lat, lon } = data;
        const url = `${ONE_CALL_URL}?lat=${lat}&lon=${lon}&lang=zh_tw&units=metric&appid=${KEY}`;
        const newData = JSON.parse(JSON.stringify(data));
        dispatch(createLoadingStatusAction(true));
        Axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    const weatherData = res.data;
                    newData.currentWeather = weatherData;
                    dispatch(createChangeCurrentCityAction(newData));
                    dispatch(createLoadingStatusAction(false));
                } else {
                    dispatch(createChangeCurrentCityAction(newData));
                    dispatch(createLoadingStatusAction(false));
                }
            }).catch(rej => {
                dispatch(createChangeCurrentCityAction(newData))
                alert('Request Fail')
                dispatch(createLoadingStatusAction(false));
            })
    }
}

const createLoadingStatusAction = (data) => {
    return {type: IS_LOADING, data}
}

export { createAddNewCityAction, createChangeCurrentCityAction, createAddCurrentCityWeatherAction, createRemoveCityAction, createLoadingStatusAction }