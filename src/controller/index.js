const {models} = require("./../config/db.sequlize")

module.exports.index = async function(req,res,next) {
    const Task = models.Task
    
    console.log(req.session.isAuth)
    res.render("index", {user: req.session.isAuth})
}