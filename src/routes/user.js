const express = require("express")
const router = express.Router()
const userController = require("./../controller/user")
const isLoggedIn = require("./../middlewares/isAuthorized")

router.get("/login", isLoggedIn, userController.login)
router.post("/loginAuth", userController.loginAuth)
router.get("/logout", userController.logout)

module.exports = router