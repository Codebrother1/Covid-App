import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: ''
    }
  }
handleChange = e => {
  this.setState({
    name: e.target.value
  })
}
handleSubmit = e => {
  e.preventDefault();
  this.props.addPatients(this.state.name);
  this.setState({
    name: ""
  })
}
  
  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)}  >
          <input onChange={e => this.handleChange(e)}     value={this.state.name} type="text" placeholder="Enter patient name"/>
          <button type="submit">Add Patient</button>
        </form>
      </div>
    )
  }
}

export default Form;
