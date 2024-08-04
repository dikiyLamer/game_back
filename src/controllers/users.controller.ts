import express from 'express';
import { createUser, getUser, getUsers } from '../services/user.service';

export const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', createUser);
usersRouter.patch('/', createUser);
