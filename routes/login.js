const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("future login");
 });


 router.get('/test',(req,res)=>{
    res.send("future dehk");
 });

 module.exports=router;