const express = require('express');
const ctrl = require('./controller')

const app = express();

app.use(express.json());

app.get('/api/patients', ctrl.getPatients)

app.post('/api/patients', ctrl.addPatients)

app.put('/api/patients/:id', ctrl.vaccinatedPatients );

app.delete('/api/patients/:id', ctrl.deletePatient)

const port = 4000;

app.listen(port, () => console.log(`Server is eavesdropping on port ${port}`));