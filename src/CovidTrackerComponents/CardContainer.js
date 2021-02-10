import React, { Component } from 'react';
import $ from 'jquery'
import GlobeFlag from '../images/blue_globe_icon.png'
import TrackerCard from './TrackerCard';
import GraphCard from './GraphCard';
import './CardContainer.css'

$(function () {
    console.log("jquery ready!")
});

export default class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard:null
        }

        this.toGraph = this.toGraph.bind(this)
        this.toTracker = this.toTracker.bind(this)
        this.showButtons = this.showButtons.bind(this)
        this.cardType=this.cardType.bind(this)
    }

    cardType(type)
    {
        
        if(type==='t')
            return <TrackerCard regionData={this.props.regionData}/>
        else if (type==='g')
            return <GraphCard id={this.props.id} regionData={this.props.regionData}/>
    }

    componentDidMount()
    {
        this.setState({
            currentCard: this.cardType('t')
        })
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevProps.regionData!==this.props.regionData)
        {
            this.setState({
                currentCard: this.cardType('t')
            })
        }
    }

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
        if(this.props.regionData.name!=='Global')
        {
            return(
                <div>
                    <div id="tracker-graph">
                        {this.state.currentCard}
                    </div>
                        

                        <ul className="list-group list-group-horizontal">
                                <li className="trackerCard col d-flex justify-content-center btn btn-light" onClick={this.toTracker}>
                                    Tracker
                                </li>
                                <li className="graphCard col d-flex justify-content-center btn btn-light" onClick={this.toGraph}>
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
                        <img src={this.props.regionData.name!=="Global" ? this.props.regionData.flag : GlobeFlag} height="30"
                                width={this.props.regionData.name === 'Global' ? "30" : "50"}
                                style={{ marginRight: '10px' }} />
                        <i>{this.props.regionData.name}</i>
                    </h3>
                        {this.showButtons()}
                </div>
            </div>
        );
    }
}