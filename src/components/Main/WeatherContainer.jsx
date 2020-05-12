import React from 'react';
import WeatherView from './WeatherView';
import SearchBoxView from '../Views/SearchBoxView';
import axios from 'axios';
import '../../style.css';

const url = axios.create({ baseURL: "https://api.weatherbit.io/v2.0/forecast" });
const APP_KEY = "4087d0944abb4f5597be78934b7e5dd3";

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            temp: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.setState({ isLoaded: true });
    }

    searchCityDetails = async city => {
        await url.get(`daily?city=${city}&key=${APP_KEY}`)
            .then(res => {
                const temp = res.data.data;
                const city = res.data.city_name;

                this.setState({
                    temp,
                    city
                });
            })
    }

    render() {
        const minTemp = this.state.temp.map(el => {
            return parseInt(el.low_temp);
        });

        const maxTemp = this.state.temp.map(el => {
            return parseInt(el.max_temp);
        });

        const icon = this.state.temp.map(el => {
            return el.weather.code;
        });

        const description = this.state.temp.map(el => {
            return el.weather.description;
        });

        return (
            <div className="weather">
                <React.Fragment>
                    <SearchBoxView city={this.state.city} searchCityDetails={this.searchCityDetails}/>
                </React.Fragment>
                <div className="weatherContainer pt-3 pb-3">
                    <h5 className="cityName">{this.state.city}</h5>
                    <WeatherView day={"Mon"} icon={icon[0]} minTemp={minTemp[0]} maxTemp={maxTemp[0]} description={description[0]} />
                    <WeatherView day={"Tue"} icon={icon[1]} minTemp={minTemp[1]} maxTemp={maxTemp[1]} description={description[1]} />
                    <WeatherView day={"Wed"} icon={icon[2]} minTemp={minTemp[2]} maxTemp={maxTemp[2]} description={description[2]} />
                    <WeatherView day={"Thu"} icon={icon[3]} minTemp={minTemp[3]} maxTemp={maxTemp[3]} description={description[3]} />
                    <WeatherView day={"Fri"} icon={icon[4]} minTemp={minTemp[4]} maxTemp={maxTemp[4]} description={description[4]} />
                </div>
            </div>
        );
    }
}

export default WeatherContainer;