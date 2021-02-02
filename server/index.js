const express = require('express');
const ctrl = require('./controller')

const app = express();

app.use(express.json());

app.get('/api/patients', ctrl.getPatients)

app.post('/api/patients', ctrl.addPatients)

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));