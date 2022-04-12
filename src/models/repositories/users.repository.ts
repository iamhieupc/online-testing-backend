import { User } from 'src/models/entities/user.entity';
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
}
