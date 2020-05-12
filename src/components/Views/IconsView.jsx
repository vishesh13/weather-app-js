import React from 'react';
import Cloudy from '../../images/cloudy.svg';
import Rainy from '../../images/rainy.svg';
import Snowy from '../../images/snowy.svg';
import Sunny from '../../images/sunny.svg';
import Thermometer from '../../images/thermometer.svg';
import '../../style.css';

const IconsView = props => {
    switch (props.icon) {
        case 801:
            return <img className="icon" src={Cloudy} alt={Cloudy} />;
            break;
        case 802:
            return <img className="icon" src={Cloudy} alt={Cloudy} />;
            break;
        case 803:
            return <img className="icon" src={Cloudy} alt={Cloudy} />;
            break;
        case 200:
            return <img className="icon" src={Rainy} alt={Rainy} />;
            break;
        case 201:
            return <img className="icon" src={Rainy} alt={Rainy} />;
            break;
        case 202:
            return <img className="icon" src={Rainy} alt={Rainy} />;
            break;
        case 500:
            return <img className="icon" src={Rainy} alt={Rainy} />;
            break;
        case 600:
            return <img className="icon" src={Snowy} alt={Snowy} />;
            break;
        case 601:
            return <img className="icon" src={Snowy} alt={Snowy} />;
            break;
        case 602:
            return <img className="icon" src={Snowy} alt={Snowy} />;
            break;
        case 610:
            return <img className="icon" src={Snowy} alt={Snowy} />;
            break;
        case 800:
            return <img className="icon" src={Sunny} alt={Sunny} />;
            break;
        case 801:
            return <img className="icon" src={Sunny} alt={Sunny} />;
            break;
        default:
            return (
                <React.Fragment>
                    <img className="icon" src={Thermometer} alt={Thermometer} />
                    <h5>{props.description}</h5>
                </React.Fragment>
            );
    }
}

export default IconsView;