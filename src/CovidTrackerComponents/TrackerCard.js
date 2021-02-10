import React, { Component } from 'react';
import './TrackerCard.css'
import CaseIcon from '../images/case-icon.png'
import DeathIcon from '../images/death-icon.png'
import RecoveredIcon from '../images/recovered-icon.png'
import $ from 'jquery';
import NumberFormat from 'react-number-format';

function numberFormat(num)
{
    return <NumberFormat value={num} displayType={'text'} thousandSeparator={true}/>
}

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
            console.log(this.props.regionData.confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
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
                            <span id='case-icon'>
                                <img src={CaseIcon} alt='covid case' width='25px'/>
                            </span>
                            Confirmed Cases:
                        </h5>
                        <p className='card-text' style={covidCaseColorScheme.confirmedNo}>
                            {numberFormat(this.state.confirmed)}
                        </p>
                    </div>
                </li>

                <li className="list-group-item">
                    <div id='totalDeaths' >
                        <h5 className='card-title' style={covidCaseColorScheme.deathsTitle}>
                            <span id='death-icon'>
                                <img src={DeathIcon} alt='death icon' width='25px'/>
                            </span>
                            Total Deaths:
                        </h5>
                        <p className='card-text' style={covidCaseColorScheme.deathsNo}>
                            {numberFormat(this.state.deaths)}
                        </p>
                    </div>
                </li>

                <li className="list-group-item">
                    <div id='totalRecovered' style={covidCaseColorScheme.recoveredTitle}>
                        <h5 className='card-title'>
                            <span id='recovered-icon'>
                                <img src={RecoveredIcon} alt='recovered icon' width='20px'/>
                            </span>
                            Total Recoveries:
                        </h5>
                        <p className='card-text' style={covidCaseColorScheme.recoveredNo}>
                            {numberFormat(this.state.recovered)}
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}