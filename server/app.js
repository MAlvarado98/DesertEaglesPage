const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const {mongoose} = require('./database');

//settings
app.set('port', process.env.PORT || 8080);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes

//starting server
app.listen(app.get('port'), () => {
    console.log("Server on port "+app.get('port'));
});