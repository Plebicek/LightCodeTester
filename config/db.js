const mariaDB = require("mariadb")
const dotEnv = require("dotenv").config({path:__dirname+"./../.env"})

const DBcon = mariaDB.createPool(
    {
        host : process.env.DBhost,
        user : "farkas",
        password : process.env.DBpas,
        connectionLimit : 5,
        database : "farkas",
        port: 3306
    }
)

module.exports = function DBconnection() {
    DBcon.getConnection()
    .then(
        () => {
            console.log("succesfully connetected to Database")
        }
    ).catch(err => {
        console.log(err)
    })
}



