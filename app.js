require("dotenv").config()
const express = require("express")
const PORT = process.env.PORT || 5000
const routesTester = require("./routes/tester")
const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

app.use(routesTester)

app.listen(PORT,()=> {
    console.log(`server running... ${PORT}`)
})

