// Импортируем необходимые модули
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import { usersRouter } from './controllers/users.controller';
import { AppDataSource } from './db/config';
import { config } from 'dotenv';
import { authRouter } from './controllers/auth.controller';
import cookie_parser from 'cookie-parser';
import { daylyRouter } from './controllers/dayly.controller';
import { boostRouter } from './controllers/boost.controller';

const app = express();

config();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: ['https://leonumeno.web.app', 'http://192.168.88.216:9001', 'http://192.168.0.58:9001'],
    credentials: true,
  })
);
app.use(cookie_parser());

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/dayly', daylyRouter);
app.use('/api/boost', boostRouter);

AppDataSource.initialize()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Сервер запущен на http://localhost:${PORT} 🚀`);
    })
  )
  .catch((error) => console.log(error));
