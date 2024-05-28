export { AuthTokenUseCaseInterface };

interface AuthTokenUseCaseInterface {
  limiter(token: string): Promise<boolean>;
}
