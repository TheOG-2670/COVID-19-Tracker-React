
import React, {Component} from 'react';
import CardContainer from '../CovidTrackerComponents/CardContainer';
import SearchBar from './SearchBar';

export default class TrackerPage extends Component
{
    constructor(props)
    {
      super(props)
        this.state={
          global:null,
          country:null,
          error:false
        }
      this.getGlobalCachedData=this.getGlobalCachedData.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
    }

  getGlobalCachedData()
  {
    fetch('/api/covid/global')
    .then(res=>{return res.json()})
    .then(data=>{
      // console.log(data)
      this.setState({
        global: <CardContainer regionData={data}/>
      })
    })
  }

  componentDidMount()
  {
    this.getGlobalCachedData()
    setInterval(()=>{
        this.getGlobalCachedData()
    },3600000) //fetch data from api every hour starting at app launch
  }
  
  handleSubmit(countryName) 
  {
    fetch('/api/covid/countries/' + countryName + '/cached')
    .then(res => {
      if(res.status===404)
      {
        this.setState({
          error: true
        })
        return res.status
      }
      else
      {
        this.setState({
          error: false
        })
        return res.json()
      }
    })
    .then(data => {
      this.setState({
        country: <CardContainer id={data.id} regionData={data}/>
      })
    })
  }
  
  render()
  {
    const countryPlaceholderStyle={
      marginTop:'250px', 
        color:'grey', 
        border:'3px dashed grey', 
        borderRadius:'10px', 
        fontSize:'20px', 
        textAlign:'center', 
        opacity:'0.5'
      }
    
        return(
          <div className='container'>
            <SearchBar onClick={this.handleSubmit}/>
              <div className="row">
                <div className='col-md-5'>
                  {this.state.global}
                </div>
                <div className='col-md-2 d-flex justify-content-center'>
                  <span style={{display: 'inline-block', marginTop:'30px', height:'430px', width:'3px', backgroundColor:'lightgrey'}}></span>
                </div>

                <div className='col-md-5'>
                  {
                    this.state.error || this.state.country===null
                    ?
                    <div className='' 
                        style={countryPlaceholderStyle}>
                    Searched country will appear here 
                    <br/>
                    <strong>
                      <u>
                        Note: Please maintain proper spelling
                      </u>
                    </strong></div>
                    :
                    this.state.country
                  }
                </div>
              </div>
          </div>
        )
    }
}