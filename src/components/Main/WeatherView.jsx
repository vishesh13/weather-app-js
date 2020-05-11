import React from 'react';
import DaysView from '../Views/DaysView';
import TemperatureView from '../Views/TemperatureView';
import IconsView from '../Views/IconsView';
import '../../style.css';

const WeatherView = props => {
    return (
        <div className="weatherView card">
            <DaysView day={props.day}/>
            <IconsView icon={props.icon}/>
            <TemperatureView minTemp={props.minTemp} maxTemp={props.maxTemp} description={props.description}/>
        </div>
    )
}

export default WeatherView;