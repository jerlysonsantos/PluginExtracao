import { AuthToken } from '../domain/entities/authentication-token.entity';

export { AuthTokenRepositoryInterface };

interface AuthTokenRepositoryInterface {
  getToken(token: string): Promise<AuthToken>;
  resetLimit(token: string): Promise<void>;
  incrementLimit(token: string): Promise<void>;
  setLimitTimeout(token: string): Promise<void>;
}
