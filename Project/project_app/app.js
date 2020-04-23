const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

// get the user Router for login and signin
const userRouter = require('./routes/userRouter');
const jobRouter = require('./routes/jobRouter');

app.set("view_engine", "ejs")

app.use('/', userRouter)

app.use('/job-search', jobRouter);

app.listen(PORT, () => {
    console.log('Sheltero is listening on port ' + PORT)
});
