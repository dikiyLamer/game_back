import { Request, Response } from 'express';
import { AppDataSource } from '../db/config';
import { User } from '../entities/user.entity';

const usersRepository = AppDataSource.getRepository(User);

export const getUsers = async (req: Express.Request, res: Response) => {
  const users = await usersRepository.find();
  res.send(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await usersRepository.findOne({ where: { id: Number(req.params.id) } });
  res.send(user);
};

export const createUser = async (req: Request, res: Response) => {
  console.log(req.body);

  const newUser = await usersRepository.save(req.body as User);
  res.send({ id: newUser.id });
};
