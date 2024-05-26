import { AuthToken } from '../entities/authentication-token.entity';

export { AuthTokenRepositoryInterface };

interface AuthTokenRepositoryInterface {
  getToken(token: string): Promise<AuthToken>;
}
