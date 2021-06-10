
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
          error:0,
          updateInterval:null
        }
      this.getCachedData=this.getCachedData.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)

      //used to initialize cache for each country
      // fetch('/api/covid/initData')
      // .then(res=>{
      //   return res.json()
      // })
      // .then(data=>{
      //   console.log(data)
      // })
    }

  getCachedData()
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
    console.log("page loaded!")
    this.getCachedData()
    
    // var intervalID = setInterval(()=>{
    //     this.getCachedData()
    //     console.log("page updated!")
    // },3600000) //fetch data from api every hour starting at app launch

    // this.setState({
    //   updateInterval: intervalID
    // })
  }

  // componentWillUnmount()
  // {
  //   clearInterval(this.state.updateInterval)
  // }

  handleSubmit(countryName) 
  {
    fetch('/api/covid/countries/' + countryName)
      .then(res => {
        if(res.status===404)
        {
          this.setState({
            error: 1
          })
          return res.status
        }
        else
        {
          this.setState({
            error: 0
          })
          return res.json()
        }
      })
      .then(data => {
        // console.log(data)
        
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
                    this.state.error===1 || this.state.country===null
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