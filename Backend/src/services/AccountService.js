// import {account} from '../models/account';
const { DataTypes } = require('sequelize');
const sequelize = require('../helper/orm')();
const account = require('../models/account');
const bcrypt = require('bcrypt');

class AccountService {

    Account = account(sequelize, DataTypes);

    async CreateAccount(req) {


        if (await this.IsUsernameExist(req.username)) {

            return "Username already exist"
        } else {

            try {

                var accData = await this.Account.create({
                    first_name: req.first_name,
                    last_name: req.last_name,
                    username: req.username,
                    password: await this.HashPassword(req.password)
                });

                return accData;
            } catch (err) {
                throw err;
            }
        }


    }
    async GetAllAccount() {
        try {
            const data = await this.Account.findAll();
            return data;
        } catch (err) { throw err }

    }

    async AuthenticateAccount(username, password) {

        try {

            const acc = await this.Account.findOne({ where: { username: username } });

            if (acc) {

                let res = await this.VerifyPassword(acc.password, password);
                if(res)
                    return "Verified!";
                else
                    return "Wrong";
            }
        } catch (err) { throw err }

    }


    async IsUsernameExist(usrName) {
        try {

            if (usrName != undefined) {
                const result = await this.Account.findOne({ where: { username: usrName } });

                return (result) != undefined ? true : false;
            }
            else
                throw { message: "undefined username" };




        } catch (err) { throw err }
    }


    async HashPassword(password) {

        return await bcrypt.hash(password, 10);

    }


    VerifyPassword(hashPassword, password) {
            return new Promise(resolve => {

                bcrypt.compare(password, hashPassword, async (err, result) => {
                    resolve(result);
                });
            })

    }
}


module.exports = () => {
    return new AccountService();
}