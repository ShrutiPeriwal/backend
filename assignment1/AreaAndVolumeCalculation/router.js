const express = require('express');

const router = express.Router()

router.get('/',(req,res)=>{
    const {object,metric,radius} = req.query;

    // console.log(object,metric,radius);

    if(object==='circle' && metric==='area'){
        res.send(`area of circle is ${3.14*radius*radius}`)
    }
    else if(object==='sphere' && metric==='volume'){
        res.send(`volume of sphere is ${(4/3*3.14*radius*radius*radius).toFixed(2)}`);
    }
    else if(object==='sphere' && metric==='surfaceArea'){
        res.send(`surfaceArea of sphere is ${(4*3.14*radius*radius).toFixed(2)}`);
    }else{
        res.send("please give the correct inputs")
    }
})

module.exports = router