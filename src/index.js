const express = require('express'),
    app = express(),
    ejs = require('ejs'),
    path = require('path');

const config = require('./config/database');


const requireContext = require('require-context-async')

app.engine('html', ejs.__express);

app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, '../views'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));


// controller
const routerPath = path.resolve(__dirname, './controller');
// middleware
const middlePath = path.resolve(__dirname, './middleware');

requireContext(middlePath, true, /\.js$/, (path) => {
    require(path)(app);
});

requireContext(routerPath, true, /\.js$/, (path) => {
    let expose = require(path);

    if(expose.name == 'router'){
        app.use(expose)
    }
    
});


module.exports = app;
