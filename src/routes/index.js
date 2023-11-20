/* Incules all routes for main app Light Code tester */

const upload = require("./../middlewares/upload.js")



const express = require("express")
const router = express.Router()
const indexController = require("./../controller/index.js")

/* router.get("/login", testerController.loginPage)
router.post("/login", testerController.loginPage)
router.get("/", testerController.indexPage)
router.post("/", upload.single("file"), testerController.indexPage)
router.get("/test/:testName", testerController.tester) */
//router.get("/uloha/:ulohaId", )


router.get("/", indexController.index)


module.exports = router