//DECOMMISSIONED DUE TO REDESIGN
//this page displays current data on the Novel Coronavirus (COVID-19) pandemic

import React, {Component} from 'react';

const initialState={
    globalConfirmed:'',
    gloalDeaths:'',
    globalRecovered:'',
    canadaConfirmed:'',
    canadaDeaths:'',
    canadaRecovered:''
}

export default class Covid19Tracker extends Component
{
    constructor(props)
    {
        super(props);
        this.state=initialState;
    }

    componentDidMount()
    {
        fetch('https://covid19.mathdro.id/api/')
        .then(response=>{return response.json()})
        .then(data=>{
            //console.log(data.data.confirmed)
            this.setState({
                globalConfirmed:data.confirmed.value,
                gloalDeaths: data.deaths.value,
                globalRecovered: data.recovered.value
            })
        })
        .then(
            fetch('https://covid19.mathdro.id/api/countries/Canada')
            .then(response=>{return response.json()})
            .then(data=>{
                this.setState({
                    canadaConfirmed: data.confirmed.value,
                    canadaDeaths: data.deaths.value,
                    canadaRecovered: data.recovered.value
                })
            })
        )
    }

    render()
    {
        const covidCaseColorScheme={}
        covidCaseColorScheme.confirmedTitle={color:'#b3a700'}
        covidCaseColorScheme.confirmedNo={color:'#FFD700'}
        covidCaseColorScheme.deathsTitle={color:'#b50202'}
        covidCaseColorScheme.deathsNo={color:'#FA8072'}
        covidCaseColorScheme.recoveredTitle={color:'#00821c'}
        covidCaseColorScheme.recoveredNo={color:'#90EE90'}

        return(
            <div className='container'>
                <div className='row' style={{marginTop:'30px'}}>

                    <div className='col'>
                        
                        <div className='card' id='covid19GlobalCard'>
                            <h3 className='card-header'>
                                Covid-19 Tracker - <span>
                                                        <i>Global</i>
                                                        <img src={require("../images/blue_globe_icon.png")} height="30" width="30"
                                                        style={{float:"right"}}/> 
                                                    </span>
                            </h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div id='confirmedCases' >
                                            <h5 className='card-title' style={covidCaseColorScheme.confirmedTitle}>
                                                Confirmed Cases:
                                            </h5>
                                            <p className='card-text' style={covidCaseColorScheme.confirmedNo}>
                                                {this.state.globalConfirmed}
                                            </p>
                                        </div>
                                    </li>

                                    <li className="list-group-item">  
                                        <div id='totalDeaths' >
                                            <h5 className='card-title' style={covidCaseColorScheme.deathsTitle}>
                                                Total Deaths:
                                            </h5>
                                            <p className='card-text' style={covidCaseColorScheme.deathsNo}>
                                                {this.state.gloalDeaths}
                                            </p>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div id='totalRecovered' style={covidCaseColorScheme.recoveredTitle}>
                                            <h5 className='card-title'>
                                                Total Recoveries:
                                            </h5>
                                            <p className='card-text' style={covidCaseColorScheme.recoveredNo}>
                                                {this.state.globalRecovered}
                                            </p>
                                        </div>
                                    </li>
                            </ul>
                        </div>

                    </div>

                    <div className='col'>
                        <div className='card'>
                            <h3 className='card-header'>
                                Covid-19 Tracker - <span>
                                                        <i>Canada</i>
                                                        <img src={require("../images/canada_flag.jpg")} height="25" width="50"
                                                            style={{float:"right"}}/>
                                                    </span>
                            </h3>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <div id='canadaConfirmed'>
                                        <h5 className='card-title' style={covidCaseColorScheme.confirmedTitle}>
                                            Confirmed:
                                        </h5>
                                        <p className='card-text' style={covidCaseColorScheme.confirmedNo}>
                                            {this.state.canadaConfirmed}
                                        </p>
                                        
                                    </div>
                                </li>

                                <li className='list-group-item'>
                                    <div id='canadaDeaths'>
                                        <h5 className='card-title' style={covidCaseColorScheme.deathsTitle}>
                                            Deaths:
                                        </h5>
                                        <p className='card-text' style={covidCaseColorScheme.deathsNo}>
                                            {this.state.canadaDeaths}
                                        </p>
                                    </div>
                                </li>

                                <li className='list-group-item'>
                                    <div id='canadaRecovered'>
                                        <h5 className='card-title' style={covidCaseColorScheme.recoveredTitle}>
                                            Recovered:
                                        </h5>
                                        <p className='card-text' style={covidCaseColorScheme.recoveredNo}>
                                            {this.state.canadaRecovered}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}