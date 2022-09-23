import { app } from './app.js';
import { PORT } from './config.js';
import { connect } from './infra/database.js';

const port = PORT || 3333;

connect();

app.listen(3333, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}.`);
});
