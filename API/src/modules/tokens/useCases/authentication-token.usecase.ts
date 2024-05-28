import { AuthTokenUseCaseInterface } from '../interfaces/authentication-token.usecase.interface';
import { AuthTokenRepository } from '../domain/repositories/authentication-token.repository';
import { Injectable } from '@injection-dependency';

export { AuthTokenUseCase };

@Injectable('authTokenUseCase')
class AuthTokenUseCase implements AuthTokenUseCaseInterface {
  public async limiter(token: string): Promise<boolean> {
    try {
      const authTokenRepository = new AuthTokenRepository();

      const authToken = await authTokenRepository.getToken(token);

      if (!authToken) {
        return false;
      }

      if (authToken.limitTimeout !== null) {
        if (authToken.limitTimeout > new Date()) {
          return false;
        } else if (authToken.limitTimeout < new Date()) {
          await authTokenRepository.resetLimit(token);
          authToken.limit = 0;
        }
      }

      await authTokenRepository.incrementLimit(token);

      if (authToken.limit >= 4) {
        await authTokenRepository.setLimitTimeout(token);
      }

      return true;
    } catch (error) {
      return false;
    }
  }
}
