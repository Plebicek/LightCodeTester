
const db = require("./../config/db.sequlize")
console.log(db.User)
const User = db.User


exports.index = async (req,res) => {
    const users = await User.findAll()
    res.json({users})
}