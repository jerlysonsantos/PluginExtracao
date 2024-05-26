import { Repository } from '@repository';
import { AuthTokenRepositoryInterface } from '../../interfaces/authentication-token.interface';
import { AuthToken } from '../entities/authentication-token.entity';

export { AuthTokenRepository };

class AuthTokenRepository extends Repository implements AuthTokenRepositoryInterface {
  public async getToken(token: string): Promise<AuthToken> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'SELECT id, token, origin FROM authentication_token WHERE token = $1',
        [token],
        (err, result) => {
          if (err) {
            reject(err);
          }

          if (!result.rows && result.rows.length === 0) {
            resolve(null);
          }

          const token = new AuthToken();
          token.id = result.rows[0].id;
          token.token = result.rows[0].token;
          token.origin = result.rows[0].origin;

          resolve(token);
        }
      );
    });
  }
}
