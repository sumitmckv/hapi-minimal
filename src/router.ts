import * as Hapi from '@hapi/hapi';
import DemoRoutes from './api/demo/routes';

export default class Router {
  public static async loadRoutes(server: Hapi.Server): Promise<any> {
    console.log('Router - Start adding routes');

    await new DemoRoutes().register(server);

    console.log('Router - Finish adding routes');
  }
}
