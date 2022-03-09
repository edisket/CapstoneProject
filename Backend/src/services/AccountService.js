// import {account} from '../models/account';
const { DataTypes } = require('sequelize');
const sequelize = require('../helper/orm')();
const account = require('../models/account');

class AccountService {

    Account = account(sequelize, DataTypes);

    async CreateAccount(req) {


        if( await this.IsUsernameExist(req.username)){

            return "Username already exist"
        }else{

            try {
                var accData = await this.Account.create({
                    first_name: req.first_name,
                    last_name: req.last_name,
                    username: req.username,
                    password: req.password
                });
    
                return accData;
            } catch (err) {
                throw err;
            }
        }
        

    }
    async GetAllAccount() {
        try{
            const data = await this.Account.findAll();
            return data;
        }catch(err){throw err}
       
    }

    async AuthenticateAccount() { }


    async IsUsernameExist(usrName){
        try{
            
            if(usrName != undefined){
                const result = await this.Account.findOne({where: {username: usrName}});

                return (result) != undefined ? true:false;
            }
            else 
                throw {message:"undefined username"};

          


        }catch(err){throw err}
    }
}


module.exports = () => {
    return new AccountService();
}