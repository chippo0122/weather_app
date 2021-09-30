import React, { Component } from 'react'
import './index.scss'
import {connect} from 'react-redux'

class index extends Component {
    render() {
        const {name,} = this.props.currentCity;
        const {temp, feels_like, humidity, weather} = this.props.currentCity.currentWeather.current;
        const description = weather ? weather[0].description : '--';
        return (
            <div className="pt-2 pb-5">
                <p className="fs-1 text-smooth text-center">{name}</p>
                <span className="text-smooth d-block text-center">{description}</span> 
                <div className="current-temp">
                    <p className="current-now text-center text-smooth">{`${Math.floor(temp)}°C`}</p>
                    <div className="current-temp-range d-flex justify-content-between align-items-center">
                        <p className="current-feel text-smooth">
                            {`Feels Like : ${Math.floor(feels_like)}`}
                        </p>
                        <div className="box">
                        </div>
                        <p className="current-humidity text-smooth">
                            {`Humidity : ${Math.floor(humidity)}%`}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    store => ({
        currentCity: store.currentCity
    }),
    {}
    )(index)
