import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { AppDataSource } from '../db/config';
import { Token } from '../entities/token.entity';
import { User } from '../entities/user.entity';

const tokenRepository = AppDataSource.getRepository(Token);
const usersRepository = AppDataSource.getRepository(User);

export const login = async (req: Request, res: Response) => {
  try {
    // const searchParams = new URLSearchParams(req.query);
    // const data = Object.fromEntries(searchParams.entries());
    const data = JSON.parse(JSON.stringify(req.query));
    const user = JSON.parse(data.user);
    const checkString = Object.keys(data)
      .filter((key) => key !== 'hash')
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join('\n');

    // Проверка совпадения зашифрованных данных и хеша из телеги
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(process.env.TOKEN!).digest();
    const signature = crypto.createHmac('sha256', secretKey).update(checkString).digest('hex');

    if (data.hash === signature) {
      const ttlRefresh = new Date(Date.now() + 1000 * 60 * 60 * 24);

      const accessToken = jwt.sign(data, process.env.JWT_SECRET ?? '', {
        expiresIn: '1m',
      });

      const refreshToken = jwt.sign(data, process.env.JWT_SECRET ?? '', {
        expiresIn: '10m',
      });

      let newUser = await usersRepository.findOne({ where: { id: user.id } });

      if (!newUser) {
        newUser = await usersRepository.save(user);
      }
      const newToken = new Token();
      newToken.token = refreshToken;
      newToken.user_id = newUser!.id;
      await tokenRepository.save(newToken);

      res.send({ user: newUser, accessToken });
      return;
    }
    res.status(400).send('Неправильные данные');
  } catch (e) {
    console.log(e);

    res.status(500).send(e);
  }
};

export const update = async (req: Request, res: Response) => {
  const data = JSON.parse(JSON.stringify(req.query));
  const user = JSON.parse(data.user);
  const refreshToken = await tokenRepository.findOne({
    where: { user_id: user.id },
  });

  try {
    jwt.verify(refreshToken?.token ?? '', process.env.JWT_SECRET ?? '');
    const accessToken = jwt.sign(data, process.env.JWT_SECRET ?? '', { expiresIn: '1m' });
    res.send({ accessToken });
  } catch (e) {
    console.log(e);
    res.status(401).send('Not authorized');
  }
};
