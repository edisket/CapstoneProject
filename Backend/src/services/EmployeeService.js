const EmployeeInfo = require('../models/employee_info');
class EmployeeService{


    empInfo;
    constructor(sequelize, DataTypes){
        // this.sequelize = sequelize;
        // this.DataTypes = DataTypes;

        this.empInfo = EmployeeInfo(this.sequelize, this.DataTypes);
    
    }

    RegisterEmployee(req){
        var accData = await this.empInfo.create({
            first_name:req.first_name,
            last_name:req.last_name
        });

        return accData;
    }
    DeleteEmployee(employeeId){
    }
    GetEmployeeDetail(employeeId){}
    GetAllEmployee(){}    

}

module.exports = ()=>{
    return new EmployeeService();
}