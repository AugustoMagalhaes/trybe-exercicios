const { Patients, Plans } = require('../models');

const findPatients = async (_req, res) => {
	try {
		const patients = await Patients.findAll({
			include: { model: Plans, as: 'plan' },
		});

		if (!patients.length) {
			return res.status(404).json({ message: 'Pacientes não encontrados' });
		}

		return res.status(200).json(patients);
	} catch (e) {
		console.log(e.message);
		return res.status(500).json({ message: 'Algo deu errado' });
	}
};

module.exports = { findPatients };
