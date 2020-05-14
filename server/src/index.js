import express from 'express';

import middlewaresConfig from './config/middlewares';
import './config/db';
import { CustomerRoutes, AddressRoutes } from './modules';

var os = require('os');

var networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces, "get ip address");

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/api/v1/customers', CustomerRoutes);
app.use('/api/v1/addresses', AddressRoutes);

app.listen(3000, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listen on port 3000`);
  }
});
