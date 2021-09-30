import React, { Component } from 'react'
import SidebarItem from './SidebarItem'
import { createAddCurrentCityWeatherAction } from '../../redux/Actions'
import {connect} from 'react-redux'

import './index.scss'

class index extends Component {
    render() {
        const {citysList} = this.props;
        return (
            <div>
                <div className="sidebar">
                    <button onClick={this.openSidebar} className="btn-sidebar btn btn-sm">
                        <i className="fas fa-stream text-light fs-5"></i>
                    </button>
                </div>
                <div ref={this.sidebarOpen} className="sidebar-open">
                    <div className="d-flex justify-content-end">
                        <button onClick={this.closeSidebar} className="btn-close btn btn-sm mt-2 me-2">
                            <i className="fas fa-times text-light fs-5"></i>
                        </button>
                    </div>
                    <ul className="citys-list list-unstyled p-0 my-2">
                        {
                            citysList.length === 0 ? '' :
                            citysList.map(el => {
                                return (
                                    <li onClick={this.showWeather(el)} key={`${el.lat}${el.lon}`}>
                                        <SidebarItem pos={{lat: el.lat, lon: el.lon}}>{el.name}</SidebarItem>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    sidebarOpen = React.createRef();

    openSidebar = () => {
        this.sidebarOpen.current.classList.add('open');
    }

    closeSidebar = () => {
        this.sidebarOpen.current.classList.remove('open');
    }

    showWeather = (data) => {
        return () => {
            this.props.createAddCurrentCityWeatherAction(data);
            this.closeSidebar();
        }
    }
}

export default connect(
        store => ({
            citysList: store.citysList
        }),
        {
            createAddCurrentCityWeatherAction
        }
    )(index)
