import mongoose from 'mongoose';
require('dotenv').config();

const url = process.env.DATABASE_URI || null;


const connect = () => {
  return mongoose.connect(url);
}

module.exports = connect;