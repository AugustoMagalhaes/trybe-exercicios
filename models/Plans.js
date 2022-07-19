module.exports = (sequelize, DataTypes) => {
	const Plans = sequelize.define(
		'Plans',
		{
			planId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'plan_id',
			},
			coverage: {
				type: DataTypes.STRING,
			},
			price: {
				type: DataTypes.DOUBLE,
			},
		},
		{
			timestamps: false,
			tableName: 'Plans',
			underscored: true,
		},
	);

	Plans.associate = (models) => {
		Plans.hasMany(models.Patients, { foreignKey: 'plan_id', as: 'patients' });
	};
	return Plans;
};
