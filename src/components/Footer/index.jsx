import React, { Component } from 'react'
import LOGO from './logo.png'
import './index.scss'

export default class index extends Component {
    render() {
        const { lat, lon } = this.props;
        const url = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${lat}&lon=${lon}&zoom=12`
        return (
            <div className="footer pt-3">
                <img className="logo" src={LOGO} alt="openWeather_logo" />
                <ul className="list-unstyled text-smooth px-3 m-0">
                    <li>Source By OpenWeatherMap</li>
                    <li>Dev By <a href="https://github.com/chippo0122" rel="noreferrer">Chippo0122</a></li>
                </ul>
                <a className="btn btn-secondary btn-map" target="_blank" rel="noreferrer" href={url}>See Maps</a>
            </div>
        )
    }
}
