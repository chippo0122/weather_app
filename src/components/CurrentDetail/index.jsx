import React, { Component } from 'react'
import { connect } from 'react-redux'

import {getTime} from '../../helpers'

import './index.scss'

class index extends Component {
    render() {
        const { sunset, sunrise, clouds, visibility, wind_deg, wind_speed, pressure, uvi } = this.props.current;
        const {timezone} = this.props;
        return (
            <div>
                <table className="current-detail table table-sm">
                    <tbody>
                        <tr>
                            <td>
                                <p className="text-smooth text-center">
                                    {`Sunrise : ${getTime(sunrise, timezone)}`}
                                </p>
                            </td>
                            <td>
                                <p className="text-smooth text-center">
                                    {`Sunset : ${getTime(sunset, timezone)}`}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-smooth text-center">
                                    {`Pressure : ${pressure} hPa`}
                                </p>
                            </td>
                            <td>
                                <p className="text-smooth text-center">
                                    {`UVI : ${uvi}`}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-smooth text-center">
                                    {`Clouds : ${Math.floor(clouds)}%`}
                                </p>
                            </td>
                            <td>
                                <p className="text-smooth text-center">
                                    {`Visibility : ${visibility} m`}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-smooth text-center">
                                    {`Wind Speed : ${wind_speed} m/s`}
                                </p>
                            </td>
                            <td>
                                <p className="text-smooth text-center">
                                    {`Wind Direction : ${wind_deg} deg`}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(
    store => ({
        current: store.currentCity.currentWeather.current
    })
)(index)
