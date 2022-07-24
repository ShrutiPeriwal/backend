const express = require('express');
const router = express.Router();

let todo = [];

router.get('/todo',(req,res)=>{
    res.send({'Todo List' :todo});
});


router.post('/addtodo',(req,res)=>{
    const data = req.body;
    todo.push(data)
    res.send("Todo Added Successed")
})

router.put('/update/:id',(req,res)=>{
    const id = req.params.id;
    let index;
    let isExist = false;
    isExist = todo.find((data,i)=>{
        if(data.id == id){
            index = i;
            return true;
        }
    })
    if(isExist){
        todo[index] = req.body;
        res.send('Update sucessfully')
    }else{
        res.send('Update unsucessfully')
    }
})

router.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    const isExist = todo.find((data)=>data.id==id);

    if(isExist){
        const newTodo = todo.filter((data)=> data.id != id);
        todo = newTodo;
        res.send('Todo Deleted')
    }

})