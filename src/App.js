import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import TrackerPage from './Pages/TrackerPage';



export default function App(){

  /*
  In package.json, the 'proxy' line configures a proxy connection between the react development server and
  the node api server to route all requests to their appropriate destinations.
  
  Note: the use of '/' at the end of the server's proxy address enables the react development server to
  automatically route requests and responses to the node api without having to type in the full api route 
  in the URL. 
  */

      return (
        <div>
        <NavBar/>
        <Switch>
            <Route exact path='/'>
              <Redirect to="/covidTracker"/>
            </Route>

            <Route path="/covidTracker" component={TrackerPage}/>

            <Route path="/self-assessment"/>

        </Switch>
      </div>
    
    );
}