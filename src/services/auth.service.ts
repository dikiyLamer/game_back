import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { refreshTokenNameInCookies } from '../constants/constants';

export const login = async (req: Request, res: Response) => {
  try {
    // const searchParams = new URLSearchParams(req.query);
    // const data = Object.fromEntries(searchParams.entries());
    const data = JSON.parse(JSON.stringify(req.query));

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
        expiresIn: '2m',
      });

      res.cookie(refreshTokenNameInCookies, refreshToken, {
        expires: ttlRefresh,
        httpOnly: true,
      });

      res.send({ accessToken });
      return;
    }
    res.status(400).send('Неправильные данные');
  } catch (e) {
    res.status(500).send(e);
  }
};

export const update = (req: Request, res: Response) => {
  const data = JSON.parse(JSON.stringify(req.query));
  const refreshToken = req.cookies[refreshTokenNameInCookies];
  console.log('refreshToken', refreshToken);
  console.log('req.cookies', req.cookies);

  try {
    jwt.verify(refreshToken, process.env.JWT_SECRET ?? '');
    const accessToken = jwt.sign(data, process.env.JWT_SECRET ?? '', { expiresIn: '1m' });
    res.send({ accessToken });
  } catch (e) {
    console.log(e);
    res.status(401).send('Not authorized');
  }
};
