import * as Hapi from '@hapi/hapi';

export default class DemoController {
  public hello = (request: Hapi.Request): string => {
    return `Hello ${request.params.name}!`;
  }
}
