
import React, {Component} from 'react';
import CardContainer from '../CovidTrackerComponents/CardContainer';

export default class TrackerPage extends Component
{
    constructor(props)
    {
      super(props)
        this.state={
          data:this.props.cacheData
        }
      this.getCachedData=this.getCachedData.bind(this)
      this.updateData=this.updateData.bind(this)
    }

  getCachedData()
  {
    fetch('/api/covid/getCachedData')
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


  async updateData()
  {
    const response = await fetch('/api/covid/updateData', {
        method:'POST',
        body:null
    })
    const res = await response.text()
    console.log(res)
  }

  componentDidMount()
  {
    setTimeout(()=>{
      this.setState({
        data:this.props.cacheData
      })
    },100)

    console.log("page loaded!")
    setInterval(()=>{
        this.updateData()
        this.getCachedData()
        console.log("page updated!")
    },5000) //fetch data from api every hour starting at app launch

  }

  shouldComponentUpdate(nextProps, nextState)
  {
    if(this.state.data===nextState.data)
    {
      return false
    }
    else
    {
      return true
    }
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