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

  
  render() {
    return (
      <div>
        <form>
          <input onChange={e => this.handleChange(e)}     value={this.state.patient} type="text" placeholder="Enter patient name"/>
          <button type="submit">Add Patient</button>
        </form>
      </div>
    )
  }
}

export default Form;
