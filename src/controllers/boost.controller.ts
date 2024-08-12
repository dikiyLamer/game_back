import express from 'express';
import { updateBoost } from '../services/boost.service';
import { AuthMiddleware } from '../middleware/auth.middleware';

export const boostRouter = express.Router();

boostRouter.patch('/:id', AuthMiddleware, updateBoost);
