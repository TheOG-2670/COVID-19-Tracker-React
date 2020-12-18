import React, { Component } from 'react';
import $ from 'jquery'
import CanadaFlag from '../images/canada_flag.jpg'
import GlobeFlag from '../images/blue_globe_icon.png'
import USFlag from '../images/american-flag-icon.jpg'
import TrackerCard from './TrackerCard';
import GraphCard from './GraphCard';
import TrackerStyle from '../CardContainer.css'

$(function () {
    console.log("jquery ready!")
});

export default class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard:null
        }

        this.setRegionFlag = this.setRegionFlag.bind(this)
        this.toGraph = this.toGraph.bind(this)
        this.toTracker = this.toTracker.bind(this)
        this.showButtons = this.showButtons.bind(this)
        this.cardType=this.cardType.bind(this)
    }

    cardType(type)
    {
        if(type==='t')
            return <TrackerCard regionName={this.props.regionName}/>
        else if (type==='g')
            return <GraphCard id={this.props.id} regionName={this.props.regionName}/>
    }

    componentDidMount()
    {
        this.setState({
            currentCard: this.cardType('t')
        })
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
        if(!(this.state.innerCard instanceof GraphCard))
        {
            this.setState({
                currentCard:this.cardType('g')
            })
        }
    }

    toTracker()
    {
        if(!(this.state.innerCard instanceof TrackerCard))
        {
            this.setState({
                currentCard:this.cardType('t')
            })
        }
    }


    showButtons()
    {
        if(this.props.regionName!=='Global')
        {
            return(
                <div>
                    <div id="tracker-graph">
                        {this.state.currentCard}
                    </div>
                        

                        <ul className="list-group list-group-horizontal">
                                <li className="cardButton col list-group-item d-flex justify-content-center" onClick={this.toTracker}>
                                    Tracker
                                </li>
                                <li className="cardButton col list-group-item d-flex justify-content-center" onClick={this.toGraph}>
                                    Graph
                                </li>
                        </ul>
                </div>
            )
        }
        else
        {
            return(
                this.state.currentCard
            )
        }
    }

    render() {
        return (
            <div style={{ marginTop: '30px' }}>
                <div className='card'>
                    <h3 className='card-header'>
                        <i>{this.props.regionName}</i>
                            <img src={this.setRegionFlag()} height="30"
                                width={this.props.regionName === 'Global' ? "30" : "50"}
                                style={{ marginLeft: '10px' }} />
                    </h3>
                        {this.showButtons()}
                </div>
            </div>
        );
    }
}