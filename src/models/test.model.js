


module.exports = (sequlize) => {
    const {Sequelize} = require("sequelize")
    const DataTypes = Sequelize.DataTypes

    const Test = sequlize.define("Test", {
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        file : {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })

    
    Test.sync({alter: true})
}