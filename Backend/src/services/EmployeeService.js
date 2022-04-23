
const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../helper/orm')();
const employeeinfo = require('../models/employee_info');
const positiontbl = require('../models/position_tbl');
class EmployeeService {


    EmployeeInfo;
    PositionTable;
    constructor(s, d) {
        this.EmployeeInfo = employeeinfo(s, d)
        this.PositionTable = positiontbl(s, d);
    }

    RegisterEmployee(req) {
        return new Promise(async (res, rej) => {
            sequelize.query('CALL RegisterNewEmployee(:first_name, :last_name, :pos)',
                { replacements: { first_name: req.first_name, last_name: req.last_name, pos: req.position_id } }).then(x => {
                    res({ 'isSuccess': true });
                }).catch(err => { rej({'isSuccess':false, 'errMsg':err}) });
        })
    }

    //WIP
    async UpdateEmployee(req) {
        try {

        } catch (err) { throw err; }
    }

    DeleteEmployee(employeeId) {
        return new Promise(async (res, rej) => {

            await sequelize.query('CALL DeleteEmployee(:id)', { replacements: { id: employeeId } }).then(x => {
                console.log(x);
                res({ 'isSuccess': true })
            }).catch(err => {
                rej({
                    'isSuccess': false, 'errorMsg': err
                })
            });
        })
    }

    GetEmployee(employeeId) {
        return new Promise(async (res, rej) => {

            await sequelize.query('SELECT * FROM  thesis_schema.view_employee_list WHERE id = :empid;', { replacements: { empid: employeeId }, type: QueryTypes.SELECT })
                .then(r => res(r))
                .catch(err => rej({ 'isSuccess': false, 'errMsg': err }));
        });
    }

    GetAllEmployee() {
        return new Promise(async (res, rej) => {

            sequelize.query('SELECT * FROM  thesis_schema.view_employee_list;', { type: QueryTypes.SELECT })
                .then(r => res(r))
                .catch(err => rej({ 'isSuccess': false, 'errMsg': err }));

        })
    }

     GetAllPosition() {
        return new Promise(async (res, rej) => {

            await this.PositionTable.findAll()
                .then(r => res(r))
                .catch(err => rej({ 'isSuccess': false, 'errMsg': err }))
        })
    }
}

module.exports = (s, d) => {
    return new EmployeeService(s, d);
}