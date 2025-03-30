export { Extraction };

/**
 * @swagger
 * components:
 *  schemas:
 *    Extraction:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        device:
 *          type: string
 *        os:
 *          type: string
 *        origin:
 *          type: string
 *        themeChangeCount:
 *          type: number
 *        token:
 *          type: string
 *      example:
 *        id: 1
 *        device: 'iPhone'
 *        os: 'iOS'
 *        origin: 'https://www.handtalk.com'
 *        themeChangeCount: 1
 *        token: 'aaa'
 *    ExtractionList:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/Extraction'
 */
class Extraction {
  id?: number;
  device?: string;
  os?: string;
  origin?: string;
  themeChangeCount?: number;
  token?: string;

  set setToken(token: string) {
    this.token = token && token.split(' ')[1];
  }
}
