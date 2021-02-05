'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Products',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
        },
        price: {
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
    await queryInterface.dropTable('products');
  },
};
