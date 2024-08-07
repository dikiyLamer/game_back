import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  token: string;
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
