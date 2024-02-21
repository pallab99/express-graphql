import express, { Application } from 'express';
import { startServer } from './app';
const app: Application = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { connectDB } from './configs/dataBase';
require('dotenv').config();
const port = process.env.PORT as string;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();
startServer(app, port);
