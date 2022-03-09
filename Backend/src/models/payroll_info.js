const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payroll_info', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gross_amount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    last_upd_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_upd_by: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payroll_info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
