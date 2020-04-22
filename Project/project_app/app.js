const express = require('express')
const app = express();

//set up job routers
const jobRouter = require('./routes/jobRouter');

app.get('/',(req,res) =>{
    res.send('<h1> testing </h1>')
});

//set jobRouter as job search
app.use('/job-search', jobRouter);

app.listen(3000, ()=>{
    console.log ('Sheltero listening on port 3000')
})
