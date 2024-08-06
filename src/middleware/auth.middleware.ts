import { Request, Response, NextFunction } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const bearerToken = req.get('Authorization');

  if (!bearerToken) {
    res.status(401).send('Token not provided!');
    return;
  }

  try {
    const pureToken = bearerToken.replace('Bearer ', '');
    jwt.verify(pureToken, process.env.JWT_SECRET ?? '');
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      res.status(401).send('Token expired!');
      return;
    }
    res.status(401).send('Invalid token!');
  }
  next();
};
