import React from 'react'

const Patients = (props) => {
  return (
    <div>
      <div>{props.patient.name}</div>
      <div>
        <button onClick={() => props.vaccinatedPatients(props.patient.id)}>{!props.patient.vaccinated ? 'get vaccinated' : 'vaccinated'}</button>
        <button onClick={() => props.deletePatient(props.patient.id)}>X</button>
      </div>
    </div>
  )
}

export default Patients;
