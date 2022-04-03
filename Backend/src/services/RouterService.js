const express = require('express');
const router = express.Router();
const accountRouter= require('../routes/AccountRoutes');
const employeeRouter = require('../routes/EmployeeRoute');


router.use('/account', accountRouter );
router.use('/employee', employeeRouter);


module.exports = router;