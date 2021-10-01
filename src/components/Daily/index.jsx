import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeek } from '../../helpers'

import './index.scss'

class index extends Component {
    render() {
        const { daily, timezone } = this.props;
        return (
            <div>
                <ul className="daily-wrap list-unstyled py-3">
                    {
                        daily.map(el => {
                            const { max, min } = el.temp;
                            const { icon, description } = el.weather[0];
                            const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                            return (
                                <li className="text-smooth" key={el.dt}>
                                    <div className="daily-box">
                                        <p className="daily-box-title m-0">{getWeek(el.dt, timezone)}</p>
                                        <img className="daily-box-img mx-2" src={iconURL} alt="weather_icon" />
                                        <p className="daily-box-rain m-0 text-center">
                                            <i className="fas fa-tint"></i>
                                            {` ${el.rain ? Math.floor(el.rain) : 0}%`}
                                        </p>
                                        <p className="daily-box-temp text-end m-0">{`${Math.floor(max)}°C`}</p>
                                        <p className="daily-box-temp text-end m-0">{`${Math.floor(min)}°C`}</p>
                                        <p className="daily-desktop-show m-0">
                                            <i className="fas fa-smog"></i>
                                            {` ${Math.floor(el.humidity)} %`}
                                        </p>
                                        <p className="daily-box-description daily-desktop-show text-end m-0">{description}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    store => ({
        daily: store.currentCity.currentWeather.daily
    })
)(index)


