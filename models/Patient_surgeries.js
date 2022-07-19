module.exports = (sequelize, DataTypes) => {
	const PatientSurgeries = sequelize.define(
		'Patient_surgeries',
		{},
		{
			timestamps: false,
			tableName: 'Patient_surgeries',
			underscored: true,
		},
	);

	PatientSurgeries.associate = (models) => {
		models.Surgeries.belongsToMany(models.Patients, {
			as: 'patients',
			through: PatientSurgeries,
			foreignKey: 'surgeryId',
			otherKey: 'patientId',
		});

		models.Patients.belongsToMany(models.Surgeries, {
			as: 'surgeries',
			through: PatientSurgeries,
			foreignKey: 'patientId',
			otherKey: 'surgeryId',
		});
	};
	return PatientSurgeries;
};
