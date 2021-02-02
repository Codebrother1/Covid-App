import React, { Component } from 'react'
import axios from "axios"
import Patients from './Patients';

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      patients: []
    }
  }

componentDidMount(){
  this.getPatients();
}


  getPatients = () => {
    axios.get('/api/patients').then(res => {
      this.setState({
        patients: res.data
      })
    }).catch(err => console.log(err));
  }
  
  render() {
    const mappedPatients = this.state.patients.map( patient => {
      return <Patients key={patient.id} patient={patient}   />
    })
    return (
      <div>
        {mappedPatients}
      </div>
    )
  }
}


export default Main;