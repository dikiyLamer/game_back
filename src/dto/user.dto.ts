import { Boost } from '../entities/Boost.entity';
import { Dayly } from '../entities/dayly.entity';

export class UserDto {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  allows_write_to_pm: boolean;
  record: number;
  dayly?: Dayly;
  boost?: Boost;
  todayBoost?: Boost;
}
