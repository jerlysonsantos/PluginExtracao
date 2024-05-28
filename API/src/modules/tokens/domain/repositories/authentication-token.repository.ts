import { Repository } from '@repository';
import { AuthTokenRepositoryInterface } from '../../interfaces/authentication-token.interface';
import { AuthToken } from '../entities/authentication-token.entity';
import { Injectable } from '@injection-dependency';

export { AuthTokenRepository };

@Injectable('authTokenRepository')
class AuthTokenRepository extends Repository implements AuthTokenRepositoryInterface {
  public async getToken(token: string): Promise<AuthToken> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'SELECT "id", "token", "origin", "limit", "limit_timeout" FROM authentication_token WHERE token = $1',
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
          token.limit = result.rows[0].limit;
          token.limitTimeout = result.rows[0].limit_timeout;

          resolve(token);
        }
      );
    });
  }

  public async resetLimit(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'UPDATE authentication_token SET "limit" = 0, "limit_timeout" = null WHERE token = $1',
        [token],
        (err) => {
          if (err) {
            reject(err);
          }

          resolve();
        }
      );
    });
  }

  public async incrementLimit(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'UPDATE authentication_token SET "limit" = "limit" + 1 WHERE token = $1',
        [token],
        (err) => {
          if (err) {
            reject(err);
          }

          resolve();
        }
      );
    });
  }

  public async setLimitTimeout(token: string): Promise<void> {
    const dateIncrement = new Date();
    dateIncrement.setMinutes(dateIncrement.getMinutes() + 10);

    return new Promise((resolve, reject) => {
      this.connection.query(
        'UPDATE authentication_token SET limit_timeout = $1 WHERE token = $2',
        [dateIncrement, token],
        (err) => {
          if (err) {
            reject(err);
          }

          resolve();
        }
      );
    });
  }
}
