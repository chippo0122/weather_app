import React, { Component } from 'react'
import Axios from 'axios'
import { GEO_URL, KEY } from '../../api_config'

import {connect} from 'react-redux'
import {createChangeCurrentCityAction, createAddCurrentCityWeatherAction} from '../../redux/Actions'
import './index.scss'

class index extends Component {
    state = {
        citysList: [],
        show: false
    }

    render() {
        const { citysList, show } = this.state;
        return (
            <div className="citys-search">
                <div className="input-group">
                    <input onChange={this.checkInput} onKeyDown={this.keyGoSearchCitys} ref={this.citysSearch} type="text" className="form-control searchbar border-smooth text-smooth" placeholder="Where do you live? check it out" />
                    <button onClick={this.goSearchCitys} className="btn border-smooth">
                        <i className="fas fa-search text-light"></i>
                    </button>
                </div>
                <ul className="citys-result list-group col-12 col-md-4 pt-2">
                    {
                        citysList.length === 0 && show ?
                            <li className="list-group-item">
                                No result
                            </li> :
                            citysList.map((el, index) => (
                                <li key={index} className="list-group-item" onClick={this.showWeather({name: el.name, country: el.country, lat: el.lat, lon: el.lon })} href="#">{`${el.name} - ${el.country}`}</li>
                            ))
                    }
                </ul>
            </div>
        )
    }

    citysSearch = React.createRef();

    checkInput = () => {
        const {value} = this.citysSearch.current;
        if(value === '') {
            this.setState({
                citysList: [],
                show: false
            })
        }
    }

    keyGoSearchCitys = (e) => {
        if(e.code === 'Enter') {
            this.goSearchCitys();
        }
    }

    goSearchCitys = () => {
        const { value } = this.citysSearch.current;
        const url = `${GEO_URL}?q=${value}&limit=5&appid=${KEY}`

        if (!value) {
            return
        }

        Axios.get(url)
            .then(res => {
                if (res.data.length > 0 && res.status === 200) {
                    const { data } = res;
                    this.setState({ citysList: data });
                } else {
                    this.setState({ citysList: [], show: true });
                }
            }).catch(rej => {
                alert('Request Fail');
                this.setState({ citysList: [] });
            })
    }

    showWeather = (data) => {
        return () => {
            this.props.createAddCurrentCityWeatherAction(data);
            this.citysSearch.current.value = '';
            this.setState({
                citysList: [],
                show: false
            })
        }
    }
}

export default connect(
    store => ({}), 
    {
        createChangeCurrentCityAction,
        createAddCurrentCityWeatherAction
    }
    )(index)
