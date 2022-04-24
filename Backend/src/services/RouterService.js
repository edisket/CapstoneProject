const express = require('express');
const router = express.Router();
const accountRouter= require('../routes/AccountRoutes');
const employeeRouter = require('../routes/EmployeeRoute');
const siteRouter = require('../routes/SiteRoute');


router.use('/site', siteRouter);
router.use('/account', accountRouter );
router.use('/employee', employeeRouter);


module.exports = router;