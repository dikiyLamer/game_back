import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { Token } from '../entities/token.entity';
import { Boost } from '../entities/Boost.entity';
import { Dayly } from '../entities/dayly.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cqn9hjdds78s739ab9m0-a.oregon-postgres.render.com',
  port: 5432,
  username: 'leonumeno',
  password: 'gnrt2cytioTSheYXwuOBipRUxaUgr5bb',
  database: 'leonumeno',
  entities: [User, Token, Boost, Dayly],
  synchronize: true,
  logging: false,
  ssl: true,
});
