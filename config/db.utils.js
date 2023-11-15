const { Sequelize } = require("sequelize")
require("dotenv").config({path:__dirname+"./../.env"})

const modelModules = [
    require("./../models/users.model")
]

async function getConnection() {
    try {
        const dbConnection = new Sequelize("mariadb://farkas:" + process.env.DBpass + "@"+process.env.DBhost+":3306/"+process.env.DBname)
        await dbConnection.authenticate()
        console.log("Connected to the DB succesfully")
        for (const model of modelModules) {
            model(dbConnection)
        }
    } catch(err) {
        console.error("Unable to connect to the database")
    }
}






module.exporsts = {
    getConnection
}