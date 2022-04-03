var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _attendance_sec = require("./attendance_sec");
var _attendance_tbl = require("./attendance_tbl");
var _cert_tbl = require("./cert_tbl");
var _emp_payroll_tbl = require("./emp_payroll_tbl");
var _emp_pos_tbl = require("./emp_pos_tbl");
var _employee_info = require("./employee_info");
var _payroll_info = require("./payroll_info");
var _position_tbl = require("./position_tbl");
var _route_tbl = require("./route_tbl");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var attendance_sec = _attendance_sec(sequelize, DataTypes);
  var attendance_tbl = _attendance_tbl(sequelize, DataTypes);
  var cert_tbl = _cert_tbl(sequelize, DataTypes);
  var emp_payroll_tbl = _emp_payroll_tbl(sequelize, DataTypes);
  var emp_pos_tbl = _emp_pos_tbl(sequelize, DataTypes);
  var employee_info = _employee_info(sequelize, DataTypes);
  var payroll_info = _payroll_info(sequelize, DataTypes);
  var position_tbl = _position_tbl(sequelize, DataTypes);
  var route_tbl = _route_tbl(sequelize, DataTypes);


  return {
    account,
    attendance_sec,
    attendance_tbl,
    cert_tbl,
    emp_payroll_tbl,
    emp_pos_tbl,
    employee_info,
    payroll_info,
    position_tbl,
    route_tbl,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
