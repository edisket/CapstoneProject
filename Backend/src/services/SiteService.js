const { DataTypes } = require('sequelize');
const sequelize = require('../helper/orm')();
const site = require('../models/site_tbl')(sequelize, DataTypes);


class SiteService{

    InsertSite(data){
        return new Promise(async(res,rej)=>{
            await site.create({
                site_name:data['site_name']})
                .then(()=>res({'isSuccess':true}))
                .catch(err=>rej(err));
        });
    }

    DeleteSite(siteId){
        return new Promise(async (res,rej)=>{
            await site.destroy({where:{id:siteId}})
            .then(()=>res({'isSuccess':true}))
            .catch(err=> rej(err));
        })
    }

    GetAllSite(){
        return new Promise(async(res,rej)=>{
            await site.findAll()
            .then(r=>res(r))
            .catch(err=>rej(err));
        });
    }



    UpdateSite(data){
        return new Promise(async (res,rej)=>{

            await site.update({site_name:data.site_name},{
                where:{
                    id:data.id
                }
            })
            .then(()=>res({'isSuccess':true}))
            .catch(err=> rej(err));
        });
    }


}

module.exports = ()=> new SiteService();