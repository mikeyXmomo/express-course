import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectMongo from './Database/Connection';
import { todoRouter } from './Routes/Todo.routes';
import { addressBookRouter } from './Routes/Address.routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectMongo();

app.use(todoRouter);
app.use(addressBookRouter);

app.listen(8000, () => console.log('🚀 Server Started on Port 8000'));
