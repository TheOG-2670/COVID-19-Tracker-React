import React from 'react';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import CardContainer from './CovidTrackerComponent/CardContainer'
import TrackerCard from './CovidTrackerComponent/TrackerCard';
import GraphCard from './CovidTrackerComponent/GraphCard';

export default function App() {

  return (
    <div>
      <NavBar/>

      <Switch>
        <div className='row m-0'>

          <Route path="/covidTracker"> 
            <div className="col-md-4">
              <CardContainer regionName=''>
                  <TrackerCard regionName=''/>
                  <GraphCard regions='Global,Israel'/>
              </CardContainer>
            </div>
          </Route>

        </div>
      </Switch>

    </div>
  
  );
}