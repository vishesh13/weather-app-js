import React from 'react';
import '../../style.css';

class SearchBoxView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e) {
        if (e) {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleOnSubmit(e) {
        if (e) {
            e.preventDefault();
            if (this.state.city === '') {
                alert('City field cannot be empty');
            } else {
                this.props.searchCityDetails(this.state.city);
            }
        }
        this.setState({ city: '' });
    }

    render() {
        return (
            <div className="searchBox">
                <div className="searchBox-elements">
                    <h5 className="text-white">Search here...</h5>
                    <form onSubmit={this.handleOnSubmit} className="searchcity">
                        <input
                            type="text"
                            name="city"
                            id="INPUT_SEARCH_FIELD"
                            onChange={this.handleOnChange}
                            placeholder="Search City..."
                        />
                        <button type="submit" className="btn btn-outline-info text-white">
                            Search
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBoxView;
