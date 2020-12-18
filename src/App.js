import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import CardContainer from './CovidTrackerComponent/CardContainer';

export default function App() {

  var cards=[]
  var regions=["Canada", "US", "Sri Lanka", "Israel"]
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
      <NavBar/>
  
      <Switch>
          <Route exact path="/">
            <Redirect to="/covidTracker"/>
          </Route>

          <Route path="/covidTracker"> 
            
            <div className="col-md-6 offset-md-3">
              <CardContainer regionName="Global"/>
            </div>
            
            <div className='row' style={{margin:'0'}}>
              {cards}
            </div>

          </Route>
      </Switch>
    </div>
  
  );
}