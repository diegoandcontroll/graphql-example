import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async Users(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Query(() => User)
  async User(@Args('id') id: string): Promise<User> {
    return await this.userService.findUserById(id);
  }
  @Mutation(() => User)
  async CreateUser(@Args('data') data: CreateUserInput): Promise<User> {
    const user = await this.userService.createUser(data);

    return user;
  }

  @Mutation(() => User)
  async UpdateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userService.updateUser(id, data);
    return user;
  }

  @Mutation(() => Boolean)
  async DeleteUser(@Args('id') id: string): Promise<boolean> {
    const deletedUser = await this.userService.deleteUser(id);
    return deletedUser;
  }
}
