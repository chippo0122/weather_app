import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Player, ControlBar, BigPlayButton } from 'video-react'

import Clear from '../../videos/Clear.mp4'
import Clouds from '../../videos/Clouds.mp4'
import Clouds2 from '../../videos/Clouds2.mp4'
import Clouds4 from '../../videos/Clouds4.mp4'
import Dust from '../../videos/Dust.mp4'
import Drizzle from '../../videos/Drizzle.mp4'
import Mist from '../../videos/Mist.mp4'
import Rain from '../../videos/Rain.mp4'
import Snow from '../../videos/Snow.mp4'
import Storm from '../../videos/Storm.mp4'
import Thunderstorm from '../../videos/Thunderstorm.mp4'

import './index.scss'

class index extends Component {

    state = {
        WEATHER: {
            Clear, Clouds, Clouds2, Clouds4, Dust, Drizzle, Mist, Rain, Snow, Storm, Thunderstorm
        },
    }

    componentDidUpdate() {
        this.videoPlayer.current.load()
    }

    render() {
        const { weather } = this.props.weatherStatus.current;
        const code = weather ? weather[0].id : 800;
        const status = this.getWeatherStatus(code);

        return (
            <Player ref={this.videoPlayer} autoPlay playsInline muted loop>
                <source src={this.state.WEATHER[status]}/>
                <BigPlayButton disabled />
                <ControlBar disabled/>
            </Player>
        )
    }

    videoPlayer = React.createRef();

    getWeatherStatus = (num) => {

        const getIntervalStatus = (num) => {
            if(num >= 600 && num <= 622 ) {
                return 'Snow'
            }

            if(num >= 500 && num <= 531) {
                return 'Rain'
            }

            if(num >= 300 && num <=321) {
                return 'Drizzle'
            }

            if(num >= 200 && num <= 232) {
                return 'Thunderstorm'
            }

            return 'Clear'
        }


        switch(num) {
            case 804:
                return 'Clouds4'
            case 803:
            case 802:
                return 'Clouds2'
            case 801:
                return 'Clouds'
            case 800:
                return 'Clear'
            case 781:
            case 771:
                return 'Storm'
            case 762:
            case 761:
            case 751:
            case 731:
                return 'Dust'
            case 741:
            case 721:
            case 711:
            case 701:
                return 'Mist'
            default: 
                return getIntervalStatus(num)
        }
    }
}

export default connect(
    store => ({
        weatherStatus: store.currentCity.currentWeather
    })
)(index)
