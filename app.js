const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`Incoming request ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.render('index', { title: "Home" });
});

var adminRouter = require('./admin');
app.use('/admin', adminRouter);

app.listen(4000, () => {
    console.log('Example app listening on port 4000');
});