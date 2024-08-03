// Импортируем необходимые модули
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import { usersRouter } from './controllers/users.controller';
import { AppDataSource } from './db/config';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', usersRouter);

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT} 🚀`);
});
