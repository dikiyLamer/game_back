import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';import { Dayly } from './dayly.entity';
import { Boost } from './Boost.entity';

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
  @Column({ nullable: false, default: 0 })
  record: number;

  @OneToOne(() => Dayly)
  @JoinColumn()
  dayly: Dayly;

  @OneToOne(() => Boost)
  @JoinColumn()
  boost: Boost;
}
