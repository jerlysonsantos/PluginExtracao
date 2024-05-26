import { NextFunction, Request, Response } from 'express';
import { AuthTokenRepository } from 'src/modules/extraction/domain/respositories/authentication-token.repository';

export const Authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers['authorization'];
  const [_, token] = authorization.split(' ') as [string, string];
  const authTokenRepository = new AuthTokenRepository();

  if (!token || token === null) {
    return res.status(401).json({ error: 'Usuário não autorizado' });
  }

  authTokenRepository
    .getToken(token)
    .then(() => {
      next();
    })
    .catch(() => {
      return res.status(401).json({ error: 'Usuário não autorizado' });
    });
};
