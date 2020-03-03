import * as Hapi from '@hapi/hapi';
import DemoController from './controller';
import validate from './validate';
import IRoute from '../../util/route';

export default class DemoRoutes implements IRoute {
  public async register(server: Hapi.Server): Promise<any> {
    return new Promise(resolve => {
      console.log('Route - Start adding demo routes');

      const controller = new DemoController();
      const basePath = '/api/v1/demo';

      server.route([
        {
          method: 'GET',
          path: `${basePath}/hello/{name}`,
          handler: controller.hello,
          options: {
            validate: validate.hello,
          },
        }
      ]);

      console.log('Route - Finish adding demo routes');

      resolve();
    });
  }
}
