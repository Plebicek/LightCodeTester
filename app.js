import express from "express";

const app = express()

app.set('port', 3000)

app.use('/', function (req,res) {
    res.send('hi kid')
})


export default app