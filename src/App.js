import React from 'react';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import TrackerCard from './CovidTrackerComponent/TrackerCard.js';

export default function App() {
  return (
    <div>
      <NavBar highlight='Tracker'/>

      <Switch>
        <div className='row' style={{margin:'0'}}>

          <Route path="/covidTracker">  
            <div className='col-md-4'>
              <TrackerCard regionName=''/>  
            </div>
            
            <div className='col-md-4'>
              <TrackerCard regionName='Canada'/>
            </div>
            
            <div className='col-md-4'>
              <TrackerCard regionName='US'/>
            </div>

          </Route>

        </div>
      
      </Switch>
    </div>
  
  );
}