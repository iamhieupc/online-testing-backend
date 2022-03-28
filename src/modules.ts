import { DatabaseCommonModule } from './models/database-common';
import { UserModule } from './modules/user/user.module';

export const Modules = [UserModule, DatabaseCommonModule];
export default Modules;
