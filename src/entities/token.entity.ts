import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Token {
  @Column()
  token: string;
  @PrimaryColumn()
  user_id: number;
}
