const { DataTypes } = require('sequelize');
const sequelize = require('../helper/orm')();
const empService = require('../services/EmployeeService')(sequelize, DataTypes);
const express = require('express');
const router = express.Router();
const rf = require('../helper/ResponseFormatter');

router.post('/post/register', async (req, res) => {
    try {
        const msg = await empService.RegisterEmployee(req.body);
        res.send(msg);
    } catch (err) {
        res.status(500);
        res.send(rf(500, err.message));
    }
});

router.delete('/delete/employee', async (req, res) => { 
    try{

        const msg = await empService.DeleteEmployee(req.body.emp_id);
        res.send(msg);
    }catch(err){
        res.status(500);
        res.send(rf(500,err.message));
    }
});

router.get('/get/employee', async (req, res) => { 
    try{
        const data = await empService.GetEmployee(req.query.emp_id);
        res.send(data);
    }catch(err){
        res.status(500);
        res.send(rf(500,err.message));
    }  
});
router.get('/get/all/employee', async (req, res) => { 

    try{
        const data = await empService.GetAllEmployee();
        res.send(data);
    }catch(err){
        res.status(500);
        res.send(rf(500,err.message));
    }
});
router.get('/get/position', async(req,res)=>{
    try{
    const data = await empService.GetAllPosition();
    res.send(data);
    }catch(err){
        res.status(500);
        res.send(rf(500,err.message));
    }
})


module.exports = router;