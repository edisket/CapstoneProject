const accountService = require('../services/AccountService')();
const express = require('express');
const router = express.Router();
const responseFormatter = require('../helper/ResponseFormatter')



router.post('/authenticate',(req,res)=>{})

router.post('/post/createaccount', async (req,res)=>{

    let returnData;
    try{
        const msg = await accountService.CreateAccount(req.body);
        
        returnData = responseFormatter(200, msg);
        res.send(returnData);
            
    }catch(err){
        res.status(500);
        res.send(responseFormatter(500, err.message));
    }
});


router.get('/get',)

router.get('/get/all',async (req,res)=>{

    const data =  await accountService.GetAllAccount();

     res.send(data);
})

router.get('/get/checkusername' ,  async(req,res)=>{
    try{
        const result = await accountService.IsUsernameExist(req.query['username']);
        res.send(responseFormatter(200, result));
    }catch(err){
        console.log(err);
        res.status(500);
        res.send(responseFormatter(500, err.message));
        
    }

   
})





 module.exports = router;