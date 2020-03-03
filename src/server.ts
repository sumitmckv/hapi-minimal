import * as Hapi from '@hapi/hapi';
import Router from './router';

export default class Server {
  private static _instance: Hapi.Server;

  public static async start(): Promise<Hapi.Server> {
    try {
      Server._instance = new Hapi.Server({
        port: 8181,
      });

      await Router.loadRoutes(Server._instance);
      await Server._instance.start();

      console.log('Server - Up and running');
      return Server._instance;
    } catch (error) {
      console.log(`Server - There was something wrong: ${error}`);

      throw error;
    }
  }

  public static async stop(): Promise<Error | void> {
    console.log(`Server - Stopping execution`);
    return Server._instance.stop();
  }

  public static async recycle(): Promise<Hapi.Server> {
    console.log('Server - Recycling instance');

    await Server.stop();

    return await Server.start();
  }

  public static instance(): Hapi.Server {
    return Server._instance;
  }

  public static async inject(
    options: string | Hapi.ServerInjectOptions
  ): Promise<Hapi.ServerInjectResponse> {
    return await Server._instance.inject(options);
  }
}
