const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use('/', routes);


app.listen(8081, () => {
    console.log('listening on port 8081');
});
