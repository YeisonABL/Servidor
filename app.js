import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';

const app=express();

//CONEXIÓN BASE DE DATOS
const mongoose = require('mongoose'); 
const url = 'mongodb://localhost:27017/myappprueba';
const options = {useNewUrlParser: true,  useUnifiedTopology: true};

mongoose.connect(url, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) } 
);

//MIDDELWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); 
//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

//RUTAS

app.get('/', function (req,res){

     res.send('Hola mundo');

 });
app.use('/api', require('./routes/empanadas'));
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

//Puerto

app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), function () { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});