module.exports = function(req,res,next) {
    if (!req.session.isAuth) {
        return res.redirect("/user/login")
    } else  {
        next()
    }
}