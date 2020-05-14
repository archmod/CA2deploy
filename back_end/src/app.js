const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(8081, () => {
    console.log('listening on port 8081');
});