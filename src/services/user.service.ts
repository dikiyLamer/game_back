import { Request, Response } from 'express';
import { AppDataSource } from '../db/config';
import { User } from '../entities/user.entity';
import crypto from 'crypto';

const usersRepository = AppDataSource.getRepository(User);

export const login = async (req: Request, res: Response) => {
  try {
    const searchParams = new URLSearchParams(req.body.initData);
    const data = Object.fromEntries(searchParams.entries());

    const checkString = Object.keys(data)
      .filter((key) => key !== 'hash')
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join('\n');

    console.log('TOKEN', process.env.TOKEN);
    const secretKey = crypto.createHmac('sha256', 'webAppData').update(process.env.TOKEN!).digest();
    const signature = crypto.createHmac('sha256', secretKey).update(checkString).digest('hex');
    console.log('signature', signature);
    console.log('hash', data.hash);

    res.send('goof');
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(e);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersRepository.find({ order: { record: 'DESC' } });
    res.send(users);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(e);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await usersRepository.findOne({ where: { id: Number(req.params.id) } });
    res.send(user);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(e);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await usersRepository.findOne({ where: { id: req.body.id } });
    if (user) {
      res.send(user);
    } else {
      const newUser = await usersRepository.save(req.body as User);
      res.send(newUser);
    }
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(e);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const newUser = await usersRepository.save(req.body as User);
    res.send(newUser);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(e);
  }
};
