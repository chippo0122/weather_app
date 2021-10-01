import React, { Component } from 'react'
import { connect } from 'react-redux'
import { timestampTransor } from '../../helpers';
import './index.scss'

class index extends Component {
    render() {
        const { hourly, timezone } = this.props;
        return (
            <div className="hourly-responsive">
                <ul className="hourly-wrap list-unstyled">
                    {hourly ?
                        hourly.map((el) => {
                            const {icon} = el.weather[0];
                            const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                            return (
                                <li key={el.dt} className="hourly-box text-center text-smooth pt-3">
                                    <p className="m-0">
                                        {timestampTransor(el.dt, timezone)}
                                    </p>
                                    <img className="d-block w-100" src={iconURL} alt="weather_icon" />
                                    <p className="fs-4">
                                        {Math.floor(el.temp)}
                                    </p>
                                </li>
                            )
                        })
                        : ''
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    store => ({
        hourly: store.currentCity.currentWeather.hourly
    })
)(index)
