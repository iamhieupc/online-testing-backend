import * as dotenv from 'dotenv';
dotenv.config();

export const jwtConstants = {
  accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
  accessTokenExpiry: parseInt(process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME),
  refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  refreshTokenExpiry: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME),
};

export const AUTH_CACHE_PREFIX = 'AUTH_CACHE_PREFIX_';

// export enum StableHeader {
//   ADDRESS = 'stable-finance-address',
//   SIGNATURE = 'stable-finance-signature',
//   APIKEY = 'stable-finance-api-key',
//   TIMESTAMP = 'stable-finance-timestamp',
// }
