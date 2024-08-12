import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dayly {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  daysStreak: number;

  @Column()
  lastEntry: string;
}
