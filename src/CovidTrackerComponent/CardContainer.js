import React, { Component } from 'react';
import $ from 'jquery'
import CanadaFlag from '../images/canada_flag.jpg'
import GlobeFlag from '../images/blue_globe_icon.png'
import USFlag from '../images/american-flag-icon.jpg'
import TrackerCard from './TrackerCard';
import GraphCard from './GraphCard';

$(function () {
    console.log("jquery ready!")
});

export default class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: this.props.regionName,
            innerCard: this.props.children[0]
        }
        this.setRegionFlag = this.setRegionFlag.bind(this)
        this.toGraph = this.toGraph.bind(this)
        this.toTracker = this.toTracker.bind(this)
        this.showButtons = this.showButtons.bind(this)
    }

    setRegionFlag = () => {
        switch (this.props.regionName) {
            case 'Global':
                return GlobeFlag
            case 'Canada':
                return CanadaFlag
            case 'US':
                return USFlag;
        }
    };

    toGraph()
    {
        this.setState({
            innerCard: this.props.children[1]
        })
    }

    toTracker()
    {
        this.setState({
            innerCard: this.props.children[0]
        })
    }


    showButtons()
    {
        if(this.state.region!=='Global')
        {
            return(
                <div>
                    <div id="tracker-graph">
                        {this.state.innerCard}
                    </div>
                        <li className="list-group-item">
                                <p className='card-text' >
                                    <input id='tracker' type="button" value="Tracker" onClick={this.toTracker}/>
                                    <input id='graph' type="button" value="Graph" onClick={this.toGraph}/>
                                </p>
                        </li>
                </div>
            )
        }
        else
        {
            return(
                this.state.innerCard
            )
        }
    }

    render() {
        return (
            <div style={{ marginTop: '30px' }}>
                <div className='card'>
                    <h3 className='card-header'>
                        <i>{this.state.region}</i>
                            <img src={this.setRegionFlag()} height="30"
                                width={this.state.region === 'Global' ? "30" : "50"}
                                style={{ marginLeft: '10px' }} />
                    </h3>
                    <ul className="list-group list-group-flush">
                        {this.showButtons()}
                    </ul>
                </div>
            </div>
        );
    }
}