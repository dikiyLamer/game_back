// Импортируем необходимые модули
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import { usersRouter } from './controllers/users.controller';
import { AppDataSource } from './db/config';
import { config } from 'dotenv';
import { authRouter } from './controllers/auth.controller';
import { AuthMiddleware } from './middleware/auth.middleware';
import cookie_parser from 'cookie-parser';

const app = express();

config();
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: 'http://192.168.119.71:9001', credentials: true }));
app.use(cookie_parser());

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

AppDataSource.initialize()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Сервер запущен на http://localhost:${PORT} 🚀`);
    })
  )
  .catch((error) => console.log(error));
