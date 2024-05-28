import { NextFunction, Request, Response } from 'express';
import { AuthTokenUseCase } from 'src/modules/tokens/useCases/authentication-token.usecase';

export const Limiter = async (req: Request, res: Response, next: NextFunction) => {
  const authTokenUseCase = new AuthTokenUseCase();
  const authorization = req.headers['authorization'];
  const [_, token] = authorization.split(' ') as [string, string];

  if (!token || token === null) {
    return res.status(401).json({ error: 'Usuário não autorizado' });
  }

  if (!(await authTokenUseCase.limiter(token))) {
    return res.status(429).json({ error: 'Usuário não autorizado' });
  }

  next();
};
