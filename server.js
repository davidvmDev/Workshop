const express = require('express')

const app = express()

app.get('/api/calc',(request, response)=>{
    response.send('Hello calc');
})

app.get('*',(request, response)=>{
    response.send('Hello universe!');
})

app.listen('8080',function(){
    console.log('listering in port 8080')
})
