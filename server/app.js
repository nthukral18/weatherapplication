import express from "express"

import axios from "axios"

const app = express();
app.use(express.json())

const port = 5000;

app.get("/" , (req,res)=>{
    res.status(200).json({success : "home route is up"})
})

app.listen(port , ()=>{
    console.log(`server is started at ${port}`)
})