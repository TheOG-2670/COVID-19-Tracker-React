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
            right:"0",
            fontSize:"0.2in"
        }

        return(
            <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item" style={{marginRight:"2in"}}>
                        <NavLink exact to="/covidTracker"  activeClassName="active" className="nav-link">
                            <h3>
                                Covid-19 Tracker
                            </h3>
                            </NavLink>
                    </li> 

                    <li className="nav-item">
                        <NavLink exact to="/self-assessment"  activeClassName="active" className="nav-link">
                            <h3>
                                Self-Assessment
                            </h3>
                        </NavLink>
                    </li> 

                    <li className="nav-item nav-link" style={timePosition}>
                        {this.getCurrentTime()}
                    </li>
                </ul>
            </nav>
        )
    }
}