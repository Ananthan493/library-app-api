const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { librarymodel } = require("./models/library")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ananthan123:ananthan123@cluster0.4r0z6.mongodb.net/librarydb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let library = new librarymodel(input)
    library.save()
    console.log(library)
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    librarymodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.listen(8083,()=>{
    console.log("server started")
})