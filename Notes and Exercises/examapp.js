var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var centres = [
{
  "id": 0,
  "location": "Chastone Carpark C",
  "capacity": 5000,
  "available_tests": 3560,
  "average_waiting_time": 60
},
{
  // another centre
  // id == 1 (id corresponds to indexes on the array)
},
{
  // another centre
}
];

// Routes
// GET
app.get('api/:id', (req,res)=>{
    const centre= centres.find(centre => centre.id===req.body.id);
    if (centre!=null){
        res.json(centre)
        return res.end();
    }
    else{
        res.send("cant find user :(");
    }

})
   //to be added here

//POST
app.post('api/:id', (req,res)=>{
        const centre= centres.find(centre => centre.id===req.body.id);
        if (centre!=null){
            centre.capacity = req.body.capacity;
            centre.available_tests = req.body.available_tests;
            centre.average_waiting_time = req.average_waiting_time;
            res.json(centre)
            return res.end();
        }
        else{
            res.send("cant find user :(");
        }
    })
   //to be added here
// Start the server

app.listen(3000,function(req,res){
	console.log('Express listening on port 3000');
});