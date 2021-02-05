const { Request } = require('./Requests');

module.exports = (sequelize, DataTypes) => {
  const Reports = sequelize.define(
    'Reports',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idRequest: {
        type: DataTypes.INTEGER,
        references: {
          model: Request,
          key: 'id',
        },
      },
      totalValue: DataTypes.DOUBLE,
      description: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      timestamps: true,
    },
  );

  return Reports;
};
