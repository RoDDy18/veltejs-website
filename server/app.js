const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const path = require("path")

const app = express()

app.use(cors())
app.use(morgan("tiny"))

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.resolve(__dirname, "public")))
    app.all("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "public", "index.html"))
    })
}

app.all("*", (req, res)=>{
    res.send("Node Production Environment Required")
})

const port = 5000 || process.env.PORT
app.listen(port, ()=>{
    console.log(`Listening for requests on port:${port}`)
})