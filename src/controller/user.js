const db = require("./../config/db.sequlize")



exports.login =  function (req,res) {
    res.render("login")
}

exports.logout = function(req,res,next) {
    if(req.session.isAuth) {
        req.session.isAuth = null
        req.session.save((err)=> {
            if (err) next() 
        })
        res.redirect("/user/login")
    } else {
        res.redirect("/user/login")
    }
}

exports.loginAuth = async (req,res) => {
    const {username, password} = req.body
    console.log(username + " "+ password)
    getUserByName(username,(err,user)=> {
        if (err) {
            res.redirect("/user/login")
        }
        if (user) {
            if (username == user.username && username == password) {
                req.session.isAuth = {user: username, id:user.userId}
                res.redirect("/")
            } else {
                res.redirect("/user/login")
            }
        } else {
            res.redirect(201,"/user/login")
        }

    })
    
}


async function getUserByName(username, cb) {
    try{
        const user = await User.findOne({where: {username: username}})
        return cb(null, user)
    } catch (err) {
        return cb(err)
    }
}

async function getAllUsers(cb) {
    try {
        const users = await User.findAll()
        return cb(null,users)
    } catch (err) {
        return cb(err)
    }
}