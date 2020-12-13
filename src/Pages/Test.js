//testing basic form validation

import React, {Component} from 'react';

// set/reset state to empty strings
const initialState={
    email:"",
    password:"",
    emailError:"",
    passwordError:""
}
export default class Test extends Component
{
    constructor(props)
    {
        super(props)
        this.state=initialState
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        //if the target element that triggered an event is a checkbox, set its value as checked (appears in state as true)
        //otherwise, set the corresponding target element's name as its key with its corresponding value in the state
        this.setState({
            [event.target.name]: event.target.name === "checkbox"
            ? event.target.checked
            : event.target.value
        })
    }

    validate()
    {
        let emailError="",
            passwordError=""

        if(!this.state.email.includes('@'))
        {
            emailError = "invalid email"
        }
        if (this.state.password.length < 8)
        {
            passwordError = "password must be more than 8 characters"
        }
        
        if(emailError || passwordError)
        {
            this.setState({
                emailError,
                passwordError
            })
            return false;
        }

        return true;
    }

    handleSubmit(event)
    {
        //preventDefault -->prevents default behavior of submitting form and reloading page
        event.preventDefault();
        if(this.validate())
        {
            console.log(this.state)
            fetch('/userInfo', 
            {
                method: "post",
                headers:
                {
                    "content-type":"application/json"
                },
                body: JSON.stringify(this.state)
            })

            this.setState(initialState)
        }
    }

    render()
    {
        return(
            <div className="container">
                <p><strong>Note:***Test page for basic front-end form validation***</strong></p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>
                            <div id='emailError' style={{color:"red"}}>
                                {this.state.emailError}
                            </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}/>
                            <div style={{color:"red"}}>
                                {this.state.passwordError}
                            </div>
                    </div>
                    <div className="form-check">
                        <input 
                            name="checkbox"
                            type="checkbox" 
                            className="form-check-input" 
                            id="exampleCheck1"
                            onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div> 
        )
    }
}