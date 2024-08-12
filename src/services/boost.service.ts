import { Request, Response } from 'express';
import { AppDataSource } from '../db/config';
import { Boost } from '../entities/Boost.entity';
import { User } from '../entities/user.entity';

const boostRepository = AppDataSource.getRepository(Boost);
const userRepository = AppDataSource.getRepository(User);

export const updateBoost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await userRepository.findOne({
      where: { id: Number(id) },
      relations: { boost: true },
    });
    const boost = { ...user?.boost, ...req.body };
    const newBoost = await boostRepository.save(boost);
    res.send(newBoost);
  } catch (e) {
    console.log(e);

    res.send(e);
  }
};
