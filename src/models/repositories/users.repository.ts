import { User } from 'src/models/entities/user.entity';
import { UpdateUserDto } from 'src/modules/user/dtos/updateUser.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findUserByEmail(email: string): Promise<User> {
    const user = await this.createQueryBuilder('users')
      .select('*')
      .where('users.email = :email', { email: email })
      .execute();
    if (user[0]) {
      return user[0];
    } else return null;
  }

  async updateUser(updateUser: UpdateUserDto, userId: number): Promise<void> {
    await this.createQueryBuilder('users')
      .update(User)
      .set(updateUser)
      .where('id = :userId', { userId: userId })
      .execute();
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.createQueryBuilder('users')
      .select('*')
      .where('users.id = :id', { id: id })
      .execute();
    if (user[0]) {
      return user[0];
    } else return null;
  }
}
