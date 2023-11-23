


module.exports = (sequlize) => {
    const {Sequelize} = require("sequelize")
    const DataTypes = Sequelize.DataTypes
    const {Task}  = sequlize.models
    console.log(sequlize.models)

    const User = sequlize.define("User", {
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

    try{
        User.belongsToMany(Task, {through: "UsersTasks", foreignKey: "userId"})
        Task.belongsToMany(User, {through: "UsersTasks", foreignKey: "taskId"})
    } catch( err) {
        console.log("referencing in modules " + err)
    }

    User.sync({alter: true, force: false})

}