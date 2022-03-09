const {Sequelize} = require('sequelize');
const config = require('../config/config.json')

module.exports= ()=>{
    return seqInstance = new Sequelize(config['dev']);
}