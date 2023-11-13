require("dotenv").config()
const dbConnection = require("./config/db")
const path = require("path")
const bodyParser = require("body-parser")
const express = require("express")
const PORT = process.env.PORT || 5000
const routesTester = require("./routes/tester")

const {Worker} = require("worker_threads")




const app = express()

dbConnection()
app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({extended: false}))
app.use("/static", express.static(path.join(__dirname, "public")))

app.use(routesTester)



app.use((req,res) => {
    res.header(404).send("this path doesnt exists we are so sorry")
})
app.listen(PORT,()=> {
    console.log(`server running... ${PORT}`)
})

