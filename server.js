const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mangaRouter = require('./routes/mangaRoute');
const regisRouter = require('./routes/registerRoute');
const postsRouter = require('./routes/postsRoute');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(logger('dev'));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.use('/mangas', mangaRouter);
// app.use('/manga', mangaRouter);
app.use('/api', regisRouter);
app.use('/posts', postsRouter);




app.listen(PORT, () =>{
    console.log(`Vibrato on ${PORT}`);
})
