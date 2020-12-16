import React, { Component } from 'react';
import Chart from 'chart.js';

const initialState = {
    region: [],
    confirmed: null,
    deaths: [],
    recovered: null
}

export default class GraphCard extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    componentDidMount() {
        var regionArray = this.props.regions.split(",")
        var deathData = []

        for (var i = 0; i < regionArray.length; i++) {
            var regionURL = regionArray[i] === 'Global' ?
                "https://covid19.mathdro.id/api/" :
                "https://covid19.mathdro.id/api/countries/" + regionArray[i];


            fetch(regionURL)
                .then(response => { return response.json() })
                .then(data => {

                    deathData.push(data.deaths.value)
                    this.setState({
                        region: regionArray,
                        // confirmed:data.confirmed.value,
                        deaths: deathData
                        // recovered: data.recovered.value
                    })


                })
        }
        this.loadChart()
    }

    loadChart() {
        setTimeout(() => {
            this.chartDemo(this.state.deaths)
        }, 500)

    }

    chartDemo(data) {
        var ctx = document.getElementById('myChart').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [this.state.region[0], this.state.region[1]],
                datasets: [{
                    label: 'Deaths',
                    data: [data[0], data[1]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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

        // console.log(this.state.deaths.length === 0?'nothing here':this.state.deaths)
        return (
            <div className="card-body">
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        )
    }
}