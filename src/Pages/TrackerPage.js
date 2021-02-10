
import React, {Component} from 'react';
import CardContainer from '../CovidTrackerComponents/CardContainer';

export default class TrackerPage extends Component
{
    constructor(props)
    {
      super(props)
        this.state={
          data:[],
          updateInterval:null
        }
      this.getCachedData=this.getCachedData.bind(this)
    }

  getCachedData()
  {
    fetch('/api/covid/cachedData')
    .then(res=>{return res.json()})
    .then(data=>{
      var cards=[]
      for(var i=0; i < data.length; i++)
      {
          cards.push(
            <CardContainer id={i} regionData={data[i]}/>
          )
      }
      this.setState({
        data:cards
      })
    })
  
  }

  componentDidMount()
  {
    console.log("page loaded!")
    this.getCachedData()
    
    var intervalID = setInterval(()=>{
        // this.updateData()
        this.getCachedData()
        console.log("page updated!")
    },3600000) //fetch data from api every hour starting at app launch

    this.setState({
      updateInterval: intervalID
    })
  }

  componentWillUnmount()
  {
    clearInterval(this.state.updateInterval)
  }

    render()
    {
        return(
        <div>
            <div className="col-md-6 offset-md-3">
              {this.state.data[0]}
            </div>
            
            <div className='row' style={{margin:'0'}}>
              {
                  this.state.data.filter(item=>item.props.regionData.name!=="Global")
                  .map(item=>
                    <div key={item.key} className="col-md-3">
                      {item}
                    </div>
                )
              } 
            </div>
           
        </div>
        )
    }
}