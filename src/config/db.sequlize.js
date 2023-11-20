const {Sequelize} = require("sequelize")
require("dotenv").config({path:__dirname+"./../.env"})


module.exports = (() => {

const sequelize = new Sequelize("mariadb://farkas:" + process.env.DBpass + "@"+process.env.DBhost+":3306/"+process.env.DBname, {logging:false, pool:{
    max:5,
    min:0,
    acquire: 30000,
    idle: 10000
}})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.User = require("../models/user.model")(sequelize,Sequelize)

return db
})()