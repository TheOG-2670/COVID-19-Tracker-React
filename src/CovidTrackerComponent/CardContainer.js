import React, { Component } from 'react';
import $ from 'jquery'
import CanadaFlag from '../images/canada_flag.jpg'
import GlobeFlag from '../images/blue_globe_icon.png'
import USFlag from '../images/american-flag-icon.jpg'

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
    }

    setRegionFlag = () => {
        switch (this.props.regionName) {
            case '':
                return GlobeFlag
            case 'Canada':
                return CanadaFlag
            case 'US':
                return USFlag;
        }
    };

    componentDidMount() {
        this.switchContext()
    }

    switchContext() {
        var self = this
        $("#graph").on("click", () => {
            console.log('graph clicked!')
            self.setState({
                innerCard: this.props.children[1]
            })
        });

        $("#tracker").on("click", () => {
            console.log('tracker clicked!')
            self.setState({
                innerCard: this.props.children[0]
            })
        })
    }


    render() {
        return (
            <div style={{ marginTop: '30px' }}>
                <div className='card'>
                    <h3 className='card-header'>
                        Covid-19 Tracker - <span>
                            <i>{this.state.region === '' ? 'Global' : this.state.region}</i>
                            <img src={this.setRegionFlag()} height="30"
                                width={this.state.region === '' ? "30" : "50"}
                                style={{ marginLeft: '10px' }} />
                        </span>
                    </h3>
                    <ul className="list-group list-group-flush">

                        <div id="tracker-graph">
                            {this.state.innerCard}
                        </div>

                        <li className="list-group-item">
                            <div id='totalRecovered' >
                                <p className='card-text' >
                                    <input id='tracker' type="button" value="Tracker" />
                                    <input id='graph' type="button" value="Graph" />
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}