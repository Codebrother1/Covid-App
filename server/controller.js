const patients = [{
  id: 0,
  name: 'John Doe',
  vaccinated: false

}]

let id = 1;


module.exports = {
  getPatients: (req, res) => {
  res.status(200).send(patients);
},
  addPatients: (req, res) => {
  const {name} = req.body;
  const newPatient = {id, name, vaccinated: false};
  patients.push(newPatient);
  id++;
  res.status(200).send(patients)
},
  vaccinatedPatients: (req, res) => {
  const index = patients.findIndex( patient => patient.id === +req.params.id);
  patients[index].vaccinated = !patients[index].vaccinated;
  res.status(200).send(patients);
},
  deletePatient: (req, res) => {
    const index = patients.findIndex( patient => patient.id === +req.params.id);
    patients.splice(index, 1);
    res.status(200).send(patients)
  }

 
}
