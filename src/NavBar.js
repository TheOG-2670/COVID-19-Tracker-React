import React, {Component} from 'react'
import {NavLink} from "react-router-dom"

export default class NavBar extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            clock:new Date()
        }
    }

    componentDidMount()
    {
        this.currentTime = setInterval(()=>{
            this.setState({
                clock:new Date()
            })
        },1000)
    }

    componentWillUnmount()
    {
        clearInterval(this.currentTime)
    }

    getCurrentTime()
    {
        return this.state.clock.toLocaleTimeString()
    }

    render()
    {
        const timePosition={
            color:"white",
            position:"absolute",
            right:"0"
        }

        return(
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/covidTracker"  activeClassName="active" className="nav-link">Covid-19 Tracker</NavLink>
                    </li>  

                    <li className="nav-item nav-link" style={timePosition}>
                        {this.getCurrentTime()}
                    </li>
                </ul>
            </nav>
        )
    }
}