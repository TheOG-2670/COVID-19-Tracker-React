import React from 'react';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import TrackerCard from './CovidTrackerComponent/TrackerCard.js';

export default function App() {
  const cards=[]
  const regions=["","Canada","US"]

  for(var i=0; i < regions.length; i++)
  {
    cards.push(
      <div className="col-md-4">
        <TrackerCard regionName={regions[i]}/>
      </div>
    )
  }
  return (
    <div>
      <NavBar highlight='Tracker'/>

      <Switch>
        <div className='row' style={{margin:'0'}}>

          <Route path="/covidTracker"> 
            {cards}
          </Route>

        </div>
      </Switch>
      
    </div>
  
  );
}