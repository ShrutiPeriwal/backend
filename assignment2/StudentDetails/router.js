const { json } = require('body-parser');
const express = require('express');
const fs = require('fs')
const route = express.Router();


route.get('/getdetails',(req,res)=>{
    const data = fs.readFileSync('./studentData.json','utf-8');
    res.send(JSON.parse(data))
})

route.post('/add',(req,res)=>{
    const data = req.body;
    
    const file = fs.readFileSync('./studentData.json','utf-8');
    const test = JSON.parse(file);
    test.push(data)
    fs.writeFileSync('./studentData.json', JSON.stringify(test));
    res.send('Success')
})

module.exports = route