import React from 'react';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import TrackerCard from './CovidTrackerComponent/TrackerCard.js';
import CardContainer from './CovidTrackerComponent/CardContainer';
import GraphCard from './CovidTrackerComponent/GraphCard';

export default function App() {

  
  return (
    <div>
      <NavBar highlight='Tracker'/>

      <Switch>
        <div className='row' style={{margin:'0'}}>

          <Route path="/covidTracker"> 
          <div className="col-md-4">
              <CardContainer regionName="Canada">
                <TrackerCard regionName="Canada"/>
                <GraphCard regionName="Canada"/>
              </CardContainer>
            </div>

            <div className="col-md-4">
              <CardContainer regionName="US">
                <TrackerCard regionName="US"/>
                <GraphCard regionName="US"/>
              </CardContainer>
            </div>
          </Route>

        </div>
      </Switch>
      
    </div>
  
  );
}