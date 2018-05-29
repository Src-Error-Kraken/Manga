const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const mangaRouter = require('./routes/mangaRoute');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(logger('dev'));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.use('/mangas', mangaRouter);




app.listen(PORT, () =>{
    console.log(`Vibrato on ${PORT}`);
})
