import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

@InputType({ isAbstract: true })
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'name not empty' })
  @Field()
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'email not empty' })
  @Field()
  email: string;
}
