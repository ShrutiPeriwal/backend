const express = require('express');
const  route  = require('./router');

const app = express();

app.use('/metrics',route)

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})