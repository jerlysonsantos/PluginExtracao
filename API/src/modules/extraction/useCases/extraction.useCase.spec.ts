import { AuthService } from './auth.service';

import { AuthRepository } from './repository/auth.repository';
import TestProviders from '@jest-providers';
import { User } from './models/user.model';
import { generateAccessToken } from '../../helpers/jwt.helper';

jest.mock('pg', () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Client: jest.fn(() => mClient) };
});
describe('AuthService', () => {
  let service: AuthService;
  let authRepository: AuthRepository;

  beforeEach(() => {
    authRepository = {
      getOneUser: jest.fn(),
    } as any;

    TestProviders.providers([
      {
        token: 'authRepository',
        useValue: authRepository,
      },
    ]);
  });

  beforeEach(() => {
    jest.clearAllMocks();
    service = new AuthService();
  });

  describe('authenticate', () => {
    it('should auth success', async () => {
      const user = new User({ id: 1, user_code: 'codigo', name: 'Junion' });
      const token = generateAccessToken('codigo');

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      jest.spyOn(authRepository, 'getOneUser').mockResolvedValue(user);

      await service.autheticate('codigo', res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().json).toHaveBeenCalledWith({
        user,
        token,
      });
    });

    it('should auth user not found', async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      jest.spyOn(authRepository, 'getOneUser').mockResolvedValue(null);

      await service.autheticate('codigo', res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Usuário não encontrado',
      });
    });

    it('should auth error', async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      jest.spyOn(authRepository, 'getOneUser').mockRejectedValue(new Error('Internal Error'));

      await service.autheticate('codigo', res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
