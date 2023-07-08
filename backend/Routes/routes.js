const { Router }  = require('express');
const { getData } = require('../database');

const router = Router();

let arr = ['Hello','world'];

router.get('/',async (req,res)=>{
    const data = await getData(); 
    res.send(data);
});

router.post('/',(req,res)=>{
    const { task } = req.body;
    arr.push(task);
    console.log(arr);
    res.send(`${task} posted successfullly`);
});

router.put('/:id',(req,res)=>{
    const { id } = req.params;
    const { task } = req.body;
    console.log("id and type-->",id,"---",typeof(id));
    console.log("after check id",arr);
    arr[id]=task;
    console.log("updated arr-->",arr);
    res.send(`${task} posted successfullly`);
});

router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    
    arr = arr.filter((d,i)=>i!=id);
    console.log("deleted arr-->",arr);
    res.send(`deleted posted successfullly`); 
})

module.exports = router;