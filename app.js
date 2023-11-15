/* MODULES */
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

/* ROUTES */
const routesTester = require("./routes/tester")
const routesIndex = require("./routes/index")

/* CONFIGURE */
require("dotenv").config()
const PORT = process.env.PORT || 5000

/* DATABASE INIT */
const database = require("./config/db.sequlize")

database.sequelize.sync({force: false})
.then(()=> {console.log("Db has sync")})
.catch((err)=> {console.error("Db sync error occured" + err)})

/* EXPRESS INIT */
const app = express()

/* ENGINE */
app.set("view engine", "ejs")
app.set("views", "views")

/* ENCODINGS */
app.use(bodyParser.urlencoded({extended: false}))

/* STATIC */
app.use("/static", express.static(path.join(__dirname, "public")))

/* ROUTES */
app.use(routesIndex)
app.use("/tester/",routesTester)

/* NotPageFound */
app.use((req,res) => {
    res.header(404).send("this path doesnt exists we are so sorry")
})

/* CREATING APP AND HTTP SERVER */
app.listen(PORT,()=> {
    console.log(`server running... ${PORT}`)
})

