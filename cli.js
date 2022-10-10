#!/usr/bin/env node
const path = require('path'); 
const fs = require('fs');

const tmplDir=path.join(__dirname,'templates') //模板的路径
const destDir=process.cwd(); //目标路径
fs.cp(tmplDir,destDir,{recursive:true},(err)=>{
    if(err){
        console.error(err);
    }
})
