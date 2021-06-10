import React, { Component } from 'react';
import './TrackerCard.css'
import CaseIcon from '../images/case-icon.png'
import DeathIcon from '../images/death-icon.png'
import RecoveredIcon from '../images/recovered-icon.png'

function numberFormat(num)
{
    return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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

        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div id='confirmedCases' >
                        <h5 className='card-title confirmed'>
                            <span id='case-icon'>
                                <img src={CaseIcon} alt='covid case' width='25px'/>
                            </span>
                            Confirmed Cases:
                        </h5>
                        <p className='card-text confirmed'>
                            {numberFormat(this.state.confirmed)}
                        </p>
                    </div>
                </li>

                <li className="list-group-item">
                    <div id='totalDeaths' >
                        <h5 className='card-title deaths'>
                            <span id='death-icon'>
                                <img src={DeathIcon} alt='death icon' width='25px'/>
                            </span>
                            Total Deaths:
                        </h5>
                        <p className='card-text deaths'>
                            {numberFormat(this.state.deaths)}
                        </p>
                    </div>
                </li>

                <li className="list-group-item">
                    <div id='totalRecovered'>
                        <h5 className='card-title recovered'>
                            <span id='recovered-icon'>
                                <img src={RecoveredIcon} alt='recovered icon' width='20px'/>
                            </span>
                            Total Recoveries:
                        </h5>
                        <p className='card-text recovered'>
                            {numberFormat(this.state.recovered)}
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}