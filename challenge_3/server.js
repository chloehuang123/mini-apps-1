const express = require('express');
const db = require('./database/index.js');
let port = 8080;

let app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, function() {
  console.log(`listening on http://localhost:${port}`)
})

