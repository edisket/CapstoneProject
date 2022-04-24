const express = require('express');
const router = express.Router();
const SiteService = require('../services/SiteService')();
const rf = require('../helper/ResponseFormatter');

router.delete('/delete/:id', async(req,res)=>{

    await SiteService.DeleteSite(req.params['id'])
    .then(r=>res.send(r))
    .catch(err=>{
        res.status(500);
        res.send(rf(500,err));
    });
})
router.post('/insert', async (req,res)=>{

    await SiteService.InsertSite(req.body)
    .then(r=>res.send(r))
    .catch(err=>{
        res.status(500);
        res.send(rf(500, err));
    });
});


router.get('/get/all', async  (req,res)=>{


    await SiteService.GetAllSite()
    .then(r=>res.send(r))
    .catch(err=>{
        res.status(500);
        res.send(rf(500,err))
    })
});


router.post('/update', async(req,res)=>{


    await SiteService.UpdateSite(req.body)
    .then(r=>res.send(r))
    .catch(err=>{
        res.status(500);
        res.send(rf(500,err))
    });
});


module.exports = router;