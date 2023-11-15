const UserModel = require("../models/users.model")
const { models } = require("./../config/db.utils")


async function index(req,res,next) {
    const allUsers = await UserModel.findAll()
    res.status(200).json({allUsers})
}

module.exports = {
    index
}