import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import c from './config';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

app.get('/', function (req, res) {
  res.send('hello world')
})

app.server.listen(c('server:port'))

export default app;
