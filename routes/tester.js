/* Incules all routes for main app Light Code tester */

const express = require("express")
const router = express.Router()
const testerController = require("../controller/tester.js")

router.get("/login", testerController.loginPage)
router.get("/", testerController.indexPage)
//router.get("/uloha/:ulohaId", )

module.exports = router