import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  username: string;
  @Column()
  language_code: string;
  @Column()
  allows_write_to_pm: boolean;
}
