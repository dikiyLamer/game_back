import express from 'express';
import { login, update } from '../services/auth.service';

export const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/update', update);
