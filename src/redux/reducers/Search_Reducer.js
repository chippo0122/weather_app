import { CHANGE_CURRENT_CITY} from "../constant";

let format = {
    current: {
        clouds: 0,
        dew_point: 0,
        dt: 0,
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        sunrise: 0,
        sunset: 0,
        temp: 0,
        uvi: 0,
        visibility: 0,
        weather: [{}],
    },
    daily: [],
    hourly: [],
    minutely: [],
    timezone: '',
    timezone_offset: 0
}

const init = {
    name: 'Taipei',
    country: "TW",
    lat: 25.0478,
    lon: 121.5319,
    currentWeather: format
}

export default function searchReducer(preState = init, action) {
    const { type, data } = action;

    switch (type) {
        case CHANGE_CURRENT_CITY:
            return data;
        default:
            return preState
    }
}
