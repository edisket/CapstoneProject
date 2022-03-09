const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emp_payroll_tbl', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    payroll_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gross_amount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    net_amount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sss: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    philhealth: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pagibig: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    wth_tax: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    last_upd_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    last_upd_by: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emp_payroll_tbl',
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
