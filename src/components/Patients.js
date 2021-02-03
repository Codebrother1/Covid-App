import React from 'react'

const Patients = (props) => {
  return (
    <div className="patient">
      <div>{props.patient.name}</div>
      <div>
        <button onClick={() => props.vaccinatedPatients(props.patient.id)}>{!props.patient.vaccinated ? 'get vaccinated' : 'vaccinated'}</button>
        <button onClick={() => props.deletePatient(props.patient.id)}>❌</button>
      </div>
    </div>
  )
}

export default Patients;
