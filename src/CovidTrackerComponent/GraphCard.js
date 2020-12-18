import React, { Component } from 'react';
import Chart from 'chart.js';

export default class GraphCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: this.props.regionName,
            confirmed: null,
            deaths: null,
            recovered: null

        };
        this.loadChart = this.loadChart.bind(this)
        this.chartDemo = this.chartDemo.bind(this)
    }

    componentDidMount() {
        var regionURL = "https://covid19.mathdro.id/api/countries/" + this.state.region;
        fetch(regionURL)
            .then(response => { return response.json() })
            .then(data => {
                this.setState({
                    confirmed:data.confirmed.value,
                    deaths: data.deaths.value,
                    recovered: data.recovered.value
                })
            })
    }

    loadChart() {
        setTimeout(() => {
            this.chartDemo()
        }, 500)
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
                }
            }
        });
    }

    render() {
        return (
            <div className="card-body">
                <canvas id={this.props.id}></canvas>
                {this.loadChart()}
            </div>
        )
    }
}