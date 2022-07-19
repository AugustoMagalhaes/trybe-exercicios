const { Patients, Plans } = require('../models');

const findPatientsByPlanId = async (req, res) => {
	const { id } = req.params;
	try {
		const patientByPlanId = await Plans.findOne({
			where: { plan_id: id },
			include: [{ model: Patients, as: 'patients' }],
		});

		if (!patientByPlanId) {
			return res.status(404).json({ message: 'Plano não encontrado' });
		}
		return res.status(200).json(patientByPlanId);
	} catch (e) {
		console.log(e.message);
		return res.status(500).json({ message: '' });
	}
};

module.exports = { findPatientsByPlanId };
