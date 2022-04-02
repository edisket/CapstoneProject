const empService = require('../services/EmployeeService')();
const express = require('express');
const router = express.Router();
const rf = require('../helper/ResponseFormatter')


router.post('/post/register', async(req,res)=>{});
router.delete('/delete/delEmployee', async(req,res)=>{});
router.get('/get/allEmployees',async (req,res)=>{});
router.get('/get/employee', async( req,res)=>{});

