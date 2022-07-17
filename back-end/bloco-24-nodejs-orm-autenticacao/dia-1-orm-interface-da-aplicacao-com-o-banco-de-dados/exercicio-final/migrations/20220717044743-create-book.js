module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Books', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			author: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			pageQuantity: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('NOW()'),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('NOW()'),
			},
		});
	},
	down: async (queryInterface, _Sequelize) => {
		await queryInterface.dropTable('Books');
	},
};
