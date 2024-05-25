import { Cookie } from "../../../utils/cookie.util";

export class ExtractionEventUseCase {
  static cookieIncrement(name: string) {
    const count = Number(Cookie.getCookie(name));
    Cookie.setCookie(name, String(count + 1), 14);
  }
}
