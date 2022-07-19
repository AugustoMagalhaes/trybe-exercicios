const bodyParser = require('body-parser');

const express = require('express');
const patientController = require('./controllers/patientController');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patients', patientController.findPatientsAndPlans);

app.get('/patients/surgeries', patientController.findPatientsAndSurgeries);

app.listen(PORT, () => {
	console.log(`Port: ${PORT}`);
});
