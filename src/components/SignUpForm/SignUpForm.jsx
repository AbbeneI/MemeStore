import { Component } from "react";
import {signUp} from "../../utilities/users-service"

// we need to export our class components just like always
// one of the key distinctions between classes and function components is the extends keyword
// this tells our code "get all the good stuff form Component, let me make it work for my purposes"
export default class SignUpForm extends Component {
  // Class copmonents handle state differently than functions
  // instead of hooks, we use the class field called state

  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  //handleChange method -> handles user input in the form
  // looks at the name of the input field and updates the value associated with that input field in state
  handleChange = (evt)=>{
    //we'll look at the event, gather information from the event, update state
    this.setState({ 
// we can use a specific syntax, to dynamically gather data from the form
[evt.target.name]: evt.target.value,
error: ''

    })
  }

  handleSubmit = async (evt)=>{
    evt.preventDefault()

    // this was to test our function component
  // alert(JSON.stringify(this.state))
try{
  //this is where we'll run our api call
  // we'll start our api call process with a copy of the state object
  const formData = {...this.state}
  delete formData.error
  delete formData.confirm
  //another way to handle this is with destructuring
  // const {name, email, password} = this.state
  // const formData = {name, email, password}
  const user = await signUp(formData)
  // passing props as such: 
  this.props.setUser(user)

} catch{
  // this is where we handle the error
  this.setState({error: 'Sign up failed - Try again!'})
}
}

  // every single class component NEEDS a render method
  // this rendder method tells our app what this component renders

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
