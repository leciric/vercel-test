import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  name: string;

  @IsNotEmpty()
  @Length(5, 240)
  email: string;

  @IsNotEmpty()
  password: string;
}
