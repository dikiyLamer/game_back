import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoostsNames } from '../enums/boost.enum';

@Entity()
export class Boost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  [BoostsNames.boosts_moveboss]: number;

  @Column()
  [BoostsNames.boosts_powerwisps]: number;

  @Column()
  [BoostsNames.boosts_remove]: number;

  @Column()
  [BoostsNames.boosts_repaint]: number;

  @Column()
  [BoostsNames.boosts_upgrade]: number;
}
