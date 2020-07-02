import "reflect-metadata";
import env from 'dotenv';
env.config();
import Server from './Server';

const main = async () => {
  const app = new Server();
  await app.createConnection();
  await app.listen();
};

main();
