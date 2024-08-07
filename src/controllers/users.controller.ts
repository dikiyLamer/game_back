import express from 'express';
import { getUser, getUsers, updateUser } from '../services/user.service';
import { AuthMiddleware } from '../middleware/auth.middleware';

export const usersRouter = express.Router();

usersRouter.get('/', AuthMiddleware, getUsers);
usersRouter.get('/:id', AuthMiddleware, getUser);
usersRouter.patch('/', AuthMiddleware, updateUser);
