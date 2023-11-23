/* MODULES */
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const SessioStore = require("express-session-sequelize")(session.Store)

/* ROUTES */
const indexRoutes = require("./routes/index")
const userRoutes = require("./routes/user")

/* MIDDLEWARES */
const isUserLogged = require("./middlewares/isLogged.js")

/* CONFIGURE */
require("dotenv").config()
const PORT = process.env.PORT || 5000

/* DATABASE INIT */

const db = require("./config/db.sequlize")

/* SESSION DATABASE */
const sequelizeSessionStore = new SessioStore({db:db})


/* EXPRESS INIT */
const app = express()

/* ENGINE */
app.set("view engine", "ejs")
app.set("views", "views")

/* ENCODINGS */
app.use(bodyParser.urlencoded({extended: false}))

/* COOKIES */
app.use(cookieParser())

/* SESSIONS */
app.use(session({
    secret : "my secret key for this session",
    resave: false,
    saveUninitialized : false,
    store: sequelizeSessionStore
}))


/* STATIC */
app.use("/static", express.static(path.join(__dirname, "public")))
/* ROUTES */
app.use("/user/", userRoutes)
app.use("/", isUserLogged, indexRoutes)

/* NotPageFound */
app.use((req,res) => {
    res.header(404).send("this path doesnt exists we are so sorry")
})

/* CREATING APP AND HTTP SERVER */
app.listen(PORT,()=> {
    console.log(`server running... ${PORT}`)
})

