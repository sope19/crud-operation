const express = require('express');
const app = express();
const application = require('./router/product.router');
app.use(express.json());
app.use('/api', application);
const PORT = 4000;

app.listen(PORT);