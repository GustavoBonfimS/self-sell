'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Reports',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        idRequest: {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'Requests',
              key: 'id',
            },
          },
        },
        totalValue: {
          allowNull: false,
          type: Sequelize.DataTypes.DOUBLE,
        },
        description: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
      },
      {
        timestamps: true,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Reports');
  },
};
