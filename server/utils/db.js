import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const DBName = process.env.SERVER_NAME;
const DBHost = process.env.SERVER_HOST;
const DBPort = process.env.DB_PORT;
const MONGODB_URL = `mongodb://${DBHost}:${DBPort}/${DBName}`;



const dbClient = () =>
  mongoose.connect(MONGODB_URL).then(() => {
    console.log(`${DBName} server is connected to MongoDB successful`);
  });
module.exports = dbClient;
