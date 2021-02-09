import React, { Component } from 'react';
import $ from 'jquery';


export default class TrackerCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmed: null,
            deaths: null,
            recovered: null
        }
    }

    componentDidMount() {
        console.log(this.props.regionData)
        if(this.props.regionData!==undefined)
        {
            console.log(this.props.regionData.confirmed)
            this.setState({
                confirmed: this.props.regionData.confirmed,
                deaths: this.props.regionData.deaths,
                recovered: this.props.regionData.recovered
            })
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevProps.regionData!==this.props.regionData)
        {   
            this.setState({
                confirmed:this.props.regionData.confirmed,
                deaths:this.props.regionData.deaths,
                recovered:this.props.regionData.recovered
            })
        }
    }

    render() {
        const covidCaseColorScheme = {}
        covidCaseColorScheme.confirmedTitle = { color: '#b3a700' }
        covidCaseColorScheme.confirmedNo = { color: '#FFD700' }
        covidCaseColorScheme.deathsTitle = { color: '#b50202' }
        covidCaseColorScheme.deathsNo = { color: '#FA8072' }
        covidCaseColorScheme.recoveredTitle = { color: '#00821c' }
        covidCaseColorScheme.recoveredNo = { color: '#90EE90' }

        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div id='confirmedCases' >
                        <h5 className='card-title' style={covidCaseColorScheme.confirmedTitle}>
                            Confirmed Cases:
                        </h5>
                        <p className='card-text' style={covidCaseColorScheme.confirmedNo}>
                            {this.state.confirmed}
                        </p>
                    </div>
                </li>

                <li className="list-group-item">
                    <div id='totalDeaths' >
                        <h5 className='card-title' style={covidCaseColorScheme.deathsTitle}>
                            Total Deaths:
                        </h5>
                        <p className='card-text' style={covidCaseColorScheme.deathsNo}>
                            {this.state.deaths}
                        </p>
                    </div>
                </li>

                <li className="list-group-item">
                    <div id='totalRecovered' style={covidCaseColorScheme.recoveredTitle}>
                        <h5 className='card-title'>
                            Total Recoveries:
                        </h5>
                        <p className='card-text' style={covidCaseColorScheme.recoveredNo}>
                            {this.state.recovered}
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}