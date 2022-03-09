const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendance_sec', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_id: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    sec_val: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    last_upd_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_upd_by: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'attendance_sec',
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
