import { Request, Response } from 'express';
import { AppDataSource } from '../db/config';
import { User } from '../entities/user.entity';
import moment from 'moment';
import { Dayly } from '../entities/dayly.entity';
import { Boost } from '../entities/Boost.entity';
import { DAYLY_REWARDS } from '../constants/constants';
import { UserDto } from '../dto/user.dto';

const usersRepository = AppDataSource.getRepository(User);
const daylyRepository = AppDataSource.getRepository(Dayly);
const boostRepository = AppDataSource.getRepository(Boost);

export const checkBonus = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const date = String(req.query.date);

  try {
    const user = await usersRepository.findOne({
      where: { id: Number(userId) },
      relations: { dayly: true, boost: true },
    });

    if (!user) {
      res.status(400).send('Такого пользователя нет');
      return;
    }

    // Самый первый заход в игру
    if (!user.dayly) {
      const dayly = new Dayly();
      dayly.daysStreak = 1;
      dayly.lastEntry = date;

      const boost = new Boost();
      boost.boosts_moveboss = 1;
      boost.boosts_powerwisps = 1;
      boost.boosts_remove = 1;
      boost.boosts_repaint = 1;
      boost.boosts_upgrade = 1;

      await boostRepository.save(boost);
      await daylyRepository.save(dayly);

      user.dayly = dayly;
      user.boost = boost;
      await usersRepository.save(user);
      res.send(user);
      return;
    }

    const clientDate = moment(date, 'YYYY-MM-DD');
    const serverDate = moment(user.dayly.lastEntry, 'YYYY-MM-DD');
    const diff = clientDate.diff(serverDate);

    if (diff / 24 / 60 / 60 / 1000 === 1) {
      const dayly = user.dayly;
      const boost = user.boost;
      dayly.daysStreak += 1;
      dayly.lastEntry = date;
      if (!boost) {
        return;
      }
      boost.boosts_moveboss += DAYLY_REWARDS[dayly.daysStreak % 10].boosts_moveboss;
      boost.boosts_powerwisps += DAYLY_REWARDS[dayly.daysStreak % 10].boosts_powerwisps;
      boost.boosts_remove += DAYLY_REWARDS[dayly.daysStreak % 10].boosts_remove;
      boost.boosts_repaint += DAYLY_REWARDS[dayly.daysStreak % 10].boosts_repaint;
      boost.boosts_upgrade += DAYLY_REWARDS[dayly.daysStreak % 10].boosts_upgrade;
      await daylyRepository.save(dayly);
      await boostRepository.save(boost);
    }
    res.send(mapToUserDto(user));
  } catch (e: any) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

export const mapToUserDto = (user: User): UserDto => {
  const newUser: UserDto = user;
  newUser.todayBoost = {
    id: 0,
    boosts_moveboss: DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_moveboss,
    boosts_powerwisps: DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_powerwisps,
    boosts_remove: DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_remove,
    boosts_repaint: DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_repaint,
    boosts_upgrade: DAYLY_REWARDS[user.dayly.daysStreak % 10].boosts_upgrade,
  };
  return newUser;
};
