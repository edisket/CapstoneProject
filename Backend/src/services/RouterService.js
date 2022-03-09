const express = require('express');
const router = express.Router();
const accountRouter= require('../routes/AccountRoutes');


router.use('/account', accountRouter )



module.exports = router;