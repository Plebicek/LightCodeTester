require("dotenv").config()

const path = require("path")
const bodyParser = require("body-parser")
const express = require("express")
const PORT = process.env.PORT || 5000
const routesTester = require("./routes/tester")
const routesIndex = require("./routes/index")

const database = require("./config/db.sequlize")
database.sequelize.sync({force: false})
.then(()=> {
  console.log("Db has sync")
})
.catch((err)=> {
  console.err("Db sync error occured" + err)
})



const app = express()

app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({extended: false}))
app.use("/static", express.static(path.join(__dirname, "public")))

app.use(routesIndex)
app.use("/tester/",routesTester)




app.use((req,res) => {
    res.header(404).send("this path doesnt exists we are so sorry")
})
app.listen(PORT,()=> {
    console.log(`server running... ${PORT}`)
})

