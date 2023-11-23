const {Sequelize} = require("sequelize")
require("dotenv").config({path:__dirname+"./../.env"})


const sequelize = new Sequelize("mariadb://farkas:" + process.env.DBpass + "@"+process.env.DBhost+":3306/"+process.env.DBname, {
    logging:false,
    dialect: 'mariadb',
    pool: {
    max:5,
    min:0,
    acquire: 30000,
    idle: 10000,
}})


const models = [
    require("./../models/test.model"),
    require("./../models/task.model"),
    require("./../models/user.model")
]

for (let model of models ) {
    model(sequelize)
}

sequelize.sync({force: false})
.then(
() => console.log("Db has sync")
)
.catch(
(err) => {
    console.log("error has interupted" + err)
}
)

module.exports = sequelize

