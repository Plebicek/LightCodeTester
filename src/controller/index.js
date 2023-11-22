module.exports.index = function(req,res) {
    console.log(req.session.isAuth)
    res.render("index", {user: req.session.isAuth})
}