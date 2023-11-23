

module.exports = (sequlize) => {
    const {Sequelize} = require("sequelize")
    const DataTypes = Sequelize.DataTypes
    const { Test } = sequlize.models

    const Task = sequlize.define("Task", {
        expiresAt : {
            type: DataTypes.DATE,
            allowNull: false,
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type : DataTypes.STRING,
            allowNull: true
        }
    })

    try{
        Task.hasMany(Test)
        Test.belongsTo(Task)
    } catch( err) {
        console.log("referencing in modules " + err)
    }
    
    Task.sync({alter: true})
}

