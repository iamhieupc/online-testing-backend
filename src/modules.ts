import { DatabaseCommonModule } from './models/database-common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

export const Modules = [UserModule, DatabaseCommonModule, AuthModule];
export default Modules;
