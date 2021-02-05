'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Requests
    await queryInterface.createTable(
      'Requests',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        product_id: {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'Products',
              key: 'id',
            },
          },
        },
        date: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.DataTypes.NOW,
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
    await queryInterface.dropTable('Requests');
  },
};
