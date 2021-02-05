const { Products } = require('./index');

module.exports = (sequelize, DataTypes) => {
  const Requests = sequelize.define(
    'Requests',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          // This is a reference to another model
          model: Products,

          // This is the column name of the referenced model
          key: 'id',
        },
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      timestamps: true,
    },
  );

  return Requests;
};
