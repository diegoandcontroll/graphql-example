import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

@InputType({ isAbstract: true })
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'name not empty' })
  @IsOptional()
  @Field()
  name: string;
}
