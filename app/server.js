const express=require('express');
const app=express();
const fs=require('fs');
app.get('/',(req,res)=>{
    res.sendFile("html_page/home.html",{root:__dirname})
});
app.listen(4000,()=>{
    console.log("server running");
});