const accountService = require('../services/AccountService')();
const express = require('express');
const router = express.Router();
const rf = require('../helper/ResponseFormatter')



router.post('/post/authenticate', async(req,res)=>{

    const {username, password} = req.body;

    try{
        
        const msg = await accountService.AuthenticateAccount(username, password);
        res.send(rf(200, msg));

    }catch(err){
        res.status(500);
        res.send(rf(500,err.message));
    }
    
});

router.post('/post/createaccount', async (req,res)=>{

    try{
        const msg = await accountService.CreateAccount(req.body);
        
        res.send(rf(200,msg,undefined));
            
    }catch(err){
        res.status(500);
        res.send(rf(500, err.message));
    }
});


router.get('/get/all',async (req,res)=>{


    try{
        const data=  await accountService.GetAllAccount();
        res.send(rf(200,"",data))
    }catch(err){

        res.status(500);
        res.send()
    }
    const data =  await accountService.GetAllAccount();

     res.send(data);
})

router.get('/get/checkusername' ,  async(req,res)=>{
    try{
        const result = await accountService.IsUsernameExist(req.query['username']);
        res.send(rf(200,"", result));
    }catch(err){
        console.log(err);
        res.status(500);
        res.send(rf(500, err.message));
        
    }

   
})





 module.exports = router;