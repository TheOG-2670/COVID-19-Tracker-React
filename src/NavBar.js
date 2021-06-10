import { NavLink } from "react-router-dom"

export default function NavBar() {
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item mr-5">
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
            </ul>
        </nav>
    )
}
