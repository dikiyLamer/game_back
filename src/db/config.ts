import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'leonumeno',
  password: 'leonumeno',
  database: 'leonumeno',
  entities: [User],
  synchronize: true,
  logging: false,
});
