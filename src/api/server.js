require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(routes);

const port = 3333;
app.listen(port, () => {
  console.log(`api listening on http://localhost:${port}`);
});
