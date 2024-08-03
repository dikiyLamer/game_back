import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cqn9hjdds78s739ab9m0-a.oregon-postgres.render.com',
  port: 5432,
  username: 'leonumeno',
  password: 'gnrt2cytioTSheYXwuOBipRUxaUgr5bb',
  database: 'leonumeno',
  entities: [User],
  synchronize: true,
  logging: false,
  ssl: true,
});
