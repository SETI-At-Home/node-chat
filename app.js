const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/jquery/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home', { title: "Home" });
});

var adminRouter = require('./admin');
app.use('/admin', adminRouter);

var apiRouter = require('./api');
app.use('/api', apiRouter)

app.listen(4000, () => {
    console.log('Example app listening on port 4000');
});