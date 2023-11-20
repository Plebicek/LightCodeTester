

module.exports = (sequlize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes
    
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

    return User

}