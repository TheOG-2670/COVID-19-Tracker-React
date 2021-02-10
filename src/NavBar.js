import React, {useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"

//using React Hooks
export default function NavBar() {
    //replaces constructor
    const [clock, setClock] = useState(new Date()) //clock -> state variable | setClock -> replaces setState

    //replaces componentDidMount, componentDidUpdate, and componentWillUnmount
    useEffect(() => {
        setInterval(setClock(new Date()))
    })
    
    const timePosition = {
        color: "white",
        position: "absolute",
        right: "0",
        fontSize: "0.2in"
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item" style={{ marginRight: "2in" }}>
                    <NavLink exact to="/covidTracker" activeClassName="active" className="nav-link">
                        <h3>
                            Covid-19 Tracker
                            </h3>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink exact to="/self-assessment" activeClassName="active" className="nav-link">
                        <h3>
                            Self-Assessment
                            </h3>
                    </NavLink>
                </li>

                <li className="nav-item nav-link" style={timePosition}>
                    {clock.toLocaleTimeString()}
                </li>
            </ul>
        </nav>
    )
}
