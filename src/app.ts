import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

export default app;
