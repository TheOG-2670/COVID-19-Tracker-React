import React from 'react'
export default function SearchBar({onClick:handleSubmit}) 
{
    const [country, setCountry] = React.useState(null)

    var handleChange=(event)=>{
        if(event.target.value!=='')
        {
            setCountry(event.target.value)
        }
    }

    var handleClick=(event)=>{
        event.preventDefault()
        handleSubmit(country)
    }

    return (
        <form className="form-group" style={{margin: '10px'}}>
            <span className="input-group-append">
                <input type="text" name="country_search" className="form-control" placeholder="Find a country (ex: Canada)" onChange={handleChange}/>
                <button className="btn btn-primary ml-2" type="submit" onClick={handleClick}>Search</button>
            </span>
        </form>
    )
}