module.exports = (sequelize, DataTypes) => {
	const Surgeries = sequelize.define(
		'Surgeries',
		{
			surgeryId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'surgery_id',
			},
			specialty: {
				type: DataTypes.STRING,
			},
			doctor: {
				type: DataTypes.DOUBLE,
			},
		},
		{
			timestamps: false,
			tableName: 'Plans',
			underscored: true,
		},
	);

	return Surgeries;
};
