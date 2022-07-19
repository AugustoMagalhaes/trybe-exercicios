module.exports = (sequelize, DataTypes) => {
	const Patients = sequelize.define(
		'Patients',
		{
			patientId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'patient_id',
			},
			fullname: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			planId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				foreignKey: true,
				field: 'plan_id',
			},
		},
		{
			timestamps: false,
			tableName: 'Patients',
			underscored: true,
		},
	);

	Patients.associate = (models) => {
		Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plan' });
	};
	return Patients;
};
