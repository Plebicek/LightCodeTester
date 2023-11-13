/* Incules all routes for main app Light Code tester */

const upload = require("./../middlewares/upload.js")

const express = require("express")
const router = express.Router()
const testerController = require("../controller/tester.js")

router.get("/login", testerController.loginPage)
router.post("/login", testerController.loginPage)
router.get("/", testerController.indexPage)
router.post("/", upload.single("file"), testerController.indexPage)
router.get("/test/:testName", testerController.tester)
//router.get("/uloha/:ulohaId", )

module.exports = router