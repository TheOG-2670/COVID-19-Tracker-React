import React, { Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import CardContainer from './CovidTrackerComponents/CardContainer';

export default class App extends Component {

  constructor(props)
  {
    super(props)
    this.state={
      data:[]
    }

    this.fetchCovidData=this.fetchCovidData.bind(this)
  }

  fetchCovidData()
  {
    fetch('/api/getAll')
    .then(res=>{return res.json()})
    .then(countryData=>{

      var cards=[]
      for(var i=0; i < countryData.length; i++)
      {
          cards.push(
            <CardContainer key={i} id={i} regionName={countryData[i].name} regionData={countryData[i]}/>
          )
      }
      this.setState({
        data:cards
      })
    })
  }

  componentDidMount()
  {
    this.fetchCovidData()
    setInterval(()=>{   
      console.log("updating data!")
      this.fetchCovidData()
    },3600000)
}

  /*
  In package.json, the 'proxy' line configures a proxy connection between the react development server and
  the node api server to route all requests to their appropriate destinations.
  
  Note: the use of '/' at the end of the server's proxy address enables the react development server to
  automatically route requests and responses to the node api without having to type in the full api route 
  in the URL. 
  */
  
render(){
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

              {this.state.data.map(item=>
                <div className="col-md-3">
                  {item}
                </div>
              )}
            
            </div>

          </Route>

      </Switch>
    </div>
  
  );
}
}