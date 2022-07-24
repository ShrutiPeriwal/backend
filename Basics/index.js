const express = require('express')
const app = express()

const Routes = require('./Routes/route')

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());

app.use('/',Routes);

app.listen(4000,()=>{
    console.log('connected to port 4000 and localhost')
})