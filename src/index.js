import express from 'express';
import apiRouter from './routers';
import bodyParser from 'body-parser';
import db from './config/database';
import cors from 'cors';
require('dotenv').config()

const { PORT } = process.env || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }))

apiRouter(app)




app.listen(PORT, (err, res) => {
  db().then(() => console.log('connected'));
  console.log(PORT)
});
