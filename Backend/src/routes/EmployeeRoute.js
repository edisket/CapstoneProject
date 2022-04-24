const { DataTypes } = require('sequelize');
const sequelize = require('../helper/orm')();
const empService = require('../services/EmployeeService')(sequelize, DataTypes);
const express = require('express');
const router = express.Router();
const rf = require('../helper/ResponseFormatter');
const multer = require('multer');
const upload = multer({dest:'uploads/'});

router.post('/post/register', upload.single('files') ,async (req, res) => {
    console.log(req.file);
    //  console.log(req.body);
    //  console.log(req.files)
    // await empService.RegisterEmployee(req.body)
    // .then(r=>res.send(r))
    // .catch(err=>{
    //     res.status(500);
    //     res.send(rf(500,err));
    // });
    res.send();
});

router.delete('/delete/employee', async (req, res) => {
    try {

        const msg = await empService.DeleteEmployee(req.body.emp_id);
        res.send(msg);
    } catch (err) {
        res.status(500);
        res.send(rf(500, err.message));
    }
});

router.get('/get/employee', async (req, res) => {
    try {
        const data = await empService.GetEmployee(req.query.emp_id);
        res.send(data);
    } catch (err) {
        res.status(500);
        res.send(rf(500, err.message));
    }
});


//GET ALL EMPLOYEE
router.get('/get/all/employee', async (req, res) => {
    await empService.GetAllEmployee()
        .then(r => res.send(r))
        .catch(err => {
            res.status(500);
            res.send(rf(500, err));
        });
});
router.get('/get/all/position', async (req, res) => {
    try {
        const data = await empService.GetAllPosition();
        res.send(data);
    } catch (err) {
        res.status(500);
        res.send(rf(500, err.message));
    }
})


module.exports = router;