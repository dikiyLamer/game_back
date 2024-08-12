import express from 'express';
import { checkBonus } from '../services/dayly.service';
import { AuthMiddleware } from '../middleware/auth.middleware';

export const daylyRouter = express.Router();

daylyRouter.get('/:id', AuthMiddleware, checkBonus);
