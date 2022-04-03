
const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../helper/orm')();
const employeeinfo = require('../models/employee_info');
const positiontbl = require('../models/position_tbl');
class EmployeeService{


    EmployeeInfo; 
    PositionTable;
    constructor(s,d){
        this.EmployeeInfo = employeeinfo(s,d)
        this.PositionTable = positiontbl(s,d);
    }
    

    async RegisterEmployee(req){    
        sequelize.query('CALL RegisterNewEmployee(:first_name, :last_name, :pos)', 
        {replacements:{ first_name:req.first_name, last_name:req.last_name, pos: req.position_id}}).then(x=>{ 
            console.log(x);
            return "success";
        });
    }

    //WIP
    async UpdateEmployee(req){
        try{

        }catch(err){throw err;}
    }

    async DeleteEmployee(employeeId){

        try{
            await sequelize.query('CALL DeleteEmployee(:id)', {replacements:{id:employeeId}}).then(x=>{
                console.log(x);
                return "success";
            });
        }catch(err){
            throw err;
        }
       
    }

    async GetEmployee(employeeId){
        try{
            const data =await  sequelize.query('SELECT * FROM  thesis_schema.view_employee_list WHERE id = :empid;', {replacements:{empid:employeeId}, type: QueryTypes.SELECT} );
            
            return data;
        }
        catch(err){throw err}
    }

    async GetAllEmployee(){
        try{
            const data = await  sequelize.query('SELECT * FROM  thesis_schema.view_employee_list;', {type:QueryTypes.SELECT})
            return data;
        }
        catch(err){throw err}
    }  

    async GetAllPosition(){
        try{
             const data = await this.PositionTable.findAll();
             return data;
        }catch(ex){
            throw ex
        }
    }

}

module.exports = (s,d)=>{
    return new EmployeeService(s,d);
}