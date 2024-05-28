export { AuthToken };

class AuthToken {
  public id?: number;
  public token?: string;
  public origin?: string;
  public limit?: number;
  public limitTimeout?: Date;
}
