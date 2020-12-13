import React, {Component} from 'react';
import CanadaFlag from '../images/canada_flag.jpg'
import GlobeFlag from '../images/blue_globe_icon.png'
import USFlag from '../images/american-flag-icon.jpg'

const initialState={
    region: null,
    confirmed:null,
    deaths:null,
    recovered:null
}

export default class TrackerCard extends Component
{
    constructor(props)
    {
        super(props)
        this.state=initialState;
        this.setRegionFlag=this.setRegionFlag.bind(this)
    }

    setRegionFlag = () =>{
        switch(this.props.regionName)
        {
            case '':
                return GlobeFlag
            case 'Canada':
                return CanadaFlag
            case 'US':
                return USFlag;
        }
    };

    componentDidMount()
    {
        var regionURL = this.props.regionName === '' ? 
                        "https://covid19.mathdro.id/api/" : 
                        "https://covid19.mathdro.id/api/countries/"+this.props.regionName;
        
        fetch(regionURL)
        .then(response=>{return response.json()})
        .then(data=>{
            //console.log(data.data.confirmed)
            this.setState({
                region: this.props.regionName,
                confirmed:data.confirmed.value,
                deaths: data.deaths.value,
                recovered: data.recovered.value
            })
        })
    }

    render()
    {
        console.log(this.state.region)
        const covidCaseColorScheme={}
        covidCaseColorScheme.confirmedTitle={color:'#b3a700'}
        covidCaseColorScheme.confirmedNo={color:'#FFD700'}
        covidCaseColorScheme.deathsTitle={color:'#b50202'}
        covidCaseColorScheme.deathsNo={color:'#FA8072'}
        covidCaseColorScheme.recoveredTitle={color:'#00821c'}
        covidCaseColorScheme.recoveredNo={color:'#90EE90'}

        return(
                <div style={{marginTop:'30px'}}>
                        <div className='card' id='covid19GlobalCard'>
                            <h3 className='card-header'>
                                Covid-19 Tracker - <span>
                                                        <i>{this.state.region === '' ? 'Global' : this.state.region}</i>
                                                        <img src={this.setRegionFlag()} height="30" 
                                                        width={this.state.region === '' ? "30" : "50"}
                                                        style={{marginLeft:'10px'}}/> 
                                                    </span>
                            </h3>
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
                        </div>
                </div>
        )
    }
}