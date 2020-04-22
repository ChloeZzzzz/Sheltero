const express = require('express')
const bodyParser = require('body-parser');
const app = express();

const userRouter = require('./routes/userRouter');
const jobRouter = require('./routes/jobRouter');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

// GET home page
app.get('/', (req, res) => {
    res.send('<H1>Sheltero</H1>')
});

// GET log in page
app.get('/login', (req, res) => {
    res.send('<H1>Login page</H1>')
});

app.use('/login', userRouter);

app.use('/job-search', jobRouter);

app.listen(3000, () => {
    console.log('Sheltero is listening on port 3000!')
});
