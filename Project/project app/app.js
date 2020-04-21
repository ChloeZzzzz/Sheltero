const express = require('express')
const app = express();

app.get('/',(req,res) =>{
    res.send('<h1> testing </h1>')
});

app.listen(3000, ()=>{
    console.log ('Sheltero listening on port 3000')
})