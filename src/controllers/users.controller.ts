import express from 'express';
import { createUser, getUser, getUsers, login, updateUser } from '../services/user.service';

export const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', createUser);
usersRouter.patch('/', updateUser);
usersRouter.post('/login', login);
