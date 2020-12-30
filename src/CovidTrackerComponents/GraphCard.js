import React, { Component } from 'react';
import Chart from 'chart.js';

export default class GraphCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmed: null,
            deaths: null,
            recovered: null

        };
        this.loadChart = this.loadChart.bind(this)
        this.chartDemo = this.chartDemo.bind(this)
    }

    componentDidMount() {
        if(this.props.regionData!==undefined)
        {
            console.log(this.props.regionData)
            this.setState({
                confirmed: this.props.regionData.confirmed,
                deaths: this.props.regionData.deaths,
                recovered: this.props.regionData.recovered
            })
        }
        this.loadChart()
    }

    loadChart() {
        setTimeout(() => {
            this.chartDemo()
        },0)
    }

    chartDemo() {
        var ctx = document.getElementById(this.props.id).getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Cases", "Deaths", "Recoveries"],
                datasets: [{
                    data: [this.state.confirmed, this.state.deaths, this.state.recovered],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend:{
                    display:false
                }
            }
        });
    }

    render() {
        return (
            <div className="card-body">
                <canvas id={this.props.id} height="220"></canvas>
            </div>
        )
    }
}