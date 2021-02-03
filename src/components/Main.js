import React, { Component } from 'react'
import axios from "axios"
import Patients from './Patients';
import Form from "./Form"




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

  addPatients = name => {
    axios.post('/api/patients', {name}).then(res => {
      this.setState({
        patients: res.data
      })
    }).catch( err => console.log(err));

  }

  vaccinatedPatients = id => {
    axios.put(`/api/patients/${id}`).then(res => {
      this.setState({
        patients: res.data
      })
    }).catch(err => console.log(err));
  }
  
  deletePatient = id => {
    axios.delete(`/api/patients/${id}`).then(res => {
      this.setState({
        patients: res.data
      })
    }).catch(err => console.log(err));

  }



  render() {
    const mappedPatients = this.state.patients.map( patient => {
      return <Patients 
      key={patient.id} 
      patient={patient}  
      vaccinatedPatients={this.vaccinatedPatients} 
      deletePatient={this.deletePatient}
      
      />
      
    })
    return (
      <div className="display">
        <Form addPatients={this.addPatients}/>
        {mappedPatients}
      </div>
    )
  }
}


export default Main;