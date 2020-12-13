import React from 'react';
import {Switch, Route} from 'react-router-dom'
//import Covid19Tracker from './Pages/Covid19Tracker'
import Test from './Pages/Test'
import NavBar from './NavBar'
import TrackerCard from './CovidTrackerComponent/TrackerCard.js';
import GraphCard from './CovidTrackerComponent/GraphCard.js'

export default function App() {
  return (
    <div>
      <NavBar highlight='Tracker'/>

      <Switch>
        <Route exact path='/' component={Test}/>
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

            
            <div className='col-md-4'>
              <GraphCard regions='Global,Canada'/>
            </div>
          </Route>

        </div>
      
      </Switch>
    </div>
  
  );
}