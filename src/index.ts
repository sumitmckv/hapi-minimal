import Server from './server';

(async () => {
  await Server.start();
})();

// listen on SIGINT signal and gracefully stop the server
process.on('SIGINT', () => {
  console.log('Stopping hapi server');

  Server.stop().then(err => {
    console.log(`Server stopped`);
    console.log(err ? 1 : 0);
  });
});
