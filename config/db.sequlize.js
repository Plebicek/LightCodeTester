const { Sequelize } = require('sequelize');
require("dotenv").config({path:__dirname+"./../.env"})


async function getConnection() {
    const sequelize = new Sequelize("mariadb://farkas:" + process.env.DBpass + "@"+process.env.DBhost+":3306/"+process.env.DBname)
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
     
}

module.exports = getConnection