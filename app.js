const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose');
const ExpressError = require('./utils/ExpressErorr');

const boardRoutes = require('./routes/boards');
const commentRoutes = require('./routes/comments');
const { send } = require('process');

mongoose.connect('mongodb://localhost:27017/everything-board')
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(err);
    });

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use('/boards', boardRoutes);
app.use('/boards/:id/comments', commentRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page not found', 404));
});

app.use((err, req, res, next) => {
    if (err.name == 'ValidationError') {
        res.send(err.message);
    }
    res.send(err.message)
});

app.listen(3000, () => {
    console.log('Server On');
});