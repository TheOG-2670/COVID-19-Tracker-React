import React from 'react';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import CardContainer from './CovidTrackerComponent/CardContainer';

export default function App() {

  var cards=[]
  var regions=["Canada", "US", "Sri Lanka", "Israel", "United Arab Emirates"]
  for(var i=0; i < regions.length; i++)
  {
    cards.push(
      <div className="col-md-3">
        <CardContainer id={i} regionName={regions[i]}/>
      </div>
    )
  }
  
  return (
    <div>
      <NavBar highlight='Tracker'/>
        
        <div className="col" style={{paddingLeft:"4.5in", paddingRight:"4.5in"}}>
          <CardContainer regionName="Global"/>
        </div>

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