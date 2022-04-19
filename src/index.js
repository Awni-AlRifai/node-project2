const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const routes = require('./routes');

app.use('/', routes);
app.get('/', (request, response) => response.send('TEST'));
app.listen(port, () => console.log(`Listening on port ${port}`));
