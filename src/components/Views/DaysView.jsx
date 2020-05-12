import React from 'react';
import '../../style.css';

const DaysView = (props) => {
    return (
        <div className="days">
            {props.day}
        </div>
    )
}

export default DaysView;