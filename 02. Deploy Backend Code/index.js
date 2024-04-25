require('dotenv').config()
const express = require('express')

const app = express()
const port = 300

app.get('/', (req,res) =>{
    res.send("Hello World")
})

app.get('/twitter', (req,res) =>{
    res.send("Hello World, This is Ayush")
})

app.get('/login', (req,res) =>{
    res.send("<h1>Please Login</h1>")
})

app.get('/youtube', (req,res) =>{
    res.send("<h2>Chai aur Code</h2>")
})

app.listen(process.env.PORT , ()=>{
    console.log(`Example app listening on port ${port}`);
    
})