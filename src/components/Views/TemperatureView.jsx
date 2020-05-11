import React from 'react';
import '../../style.css';

const TemperatureView = props => {
    return (
        <div className="temp">
            <span className="min">{props.minTemp}&#176;</span>
            <span className="max">{props.maxTemp}&#176;</span>
        </div>
    )
}

export default TemperatureView;