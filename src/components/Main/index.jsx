import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddNewCityAction, createAddCurrentCityWeatherAction, createRemoveCityAction } from '../../redux/Actions'
import Current from '../Current'
import Hourly from '../Hourly'
import Daily from '../Daily'
import CurrentDetail from '../CurrentDetail'
import Footer from '../Footer'


class Main extends Component {

    componentDidMount() {
        const { currentCity, citysList } = this.props;
        const localCitysList = JSON.parse(localStorage.getItem('weather_app_local_citysList')) || [];
        if(localCitysList.length > 0 && citysList.length <= 0) {
            localCitysList.forEach((el, index) => {
                if(index === 0) {
                    this.props.createAddCurrentCityWeatherAction(el);
                } 
                this.props.createAddNewCityAction(el);
            })
        } else {
            this.props.createAddCurrentCityWeatherAction(currentCity);
        }
    }

    componentDidUpdate() {
        const {citysList} = this.props;
        localStorage.setItem('weather_app_local_citysList', JSON.stringify(citysList));
    }

    render() {
        const {lat, lon, currentWeather} = this.props.currentCity
        const {timezone_offset} = currentWeather;
        const check = this.checkList();
        return (
            <div>
                <div className="text-end pt-2">
                    {
                        check ?
                            <a href="#root" onClick={this.removeCity} className="deleteCityList-btn text-smooth fs-4" title="Add & Remove to my cities List">
                                <i className="fas fa-star"></i>
                            </a> :
                            <a href="#root" onClick={this.addCity} className="addCityList-btn text-smooth fs-4" title="Add & Remove to my cities List">
                                <i className="far fa-star"></i>
                            </a>
                    }
                </div>
                <Current />
                <Hourly timezone={timezone_offset} />
                <Daily timezone={timezone_offset} />
                <CurrentDetail timezone={timezone_offset} />
                <Footer lat={lat} lon={lon} />
            </div>
        )
    }

    checkList = () => {
        const {citysList , currentCity} = this.props;
        const {lat, lon} = currentCity;
        return citysList.length > 0 ? citysList.some(el => el.lat === lat && el.lon === lon) : false;
    }

    addCity = (e) => {
        e.preventDefault();
        const { lat, lon, name, country } = this.props.currentCity;
        const data = { lat, lon, name, country };
        this.props.createAddNewCityAction(data);
    }

    removeCity = (e) => {
        e.preventDefault();
        const { lat, lon, name, country } = this.props.currentCity;
        const data = { lat, lon, name, country };
        this.props.createRemoveCityAction(data);
    }
}

export default connect(
    (store) => ({
        citysList: store.citysList,
        currentCity: store.currentCity
    }),
    {
        createAddNewCityAction,
        createAddCurrentCityWeatherAction,
        createRemoveCityAction
    }
)(Main)
