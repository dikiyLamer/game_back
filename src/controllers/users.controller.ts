import express from 'express';
import { createUser, getUser, getUsers, updateUser } from '../services/user.service';
import { AuthMiddleware } from '../middleware/auth.middleware';

export const usersRouter = express.Router();

usersRouter.get('/', AuthMiddleware, getUsers);
usersRouter.get('/:id', AuthMiddleware, getUser);
usersRouter.post('/', AuthMiddleware, createUser);
usersRouter.patch('/', AuthMiddleware, updateUser);
