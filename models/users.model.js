const { Sequelize, DataTypes } = require("sequelize")
//const dbConnection = require("./../config/db.sequlize")



const User = Sequelize.define("Users", {
    userId: {
        type : DataTypes.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey : true
    },
    username : {
        type: DataTypes.STRING,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE
    }
})


const Task = dbConnection.define("Task", {
  taskName: DataTypes.TEXT,
  created: DataTypes.INTEGER,
  description: DataTypes.TEXT
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();


module.exports = {
    User,
    Task
}