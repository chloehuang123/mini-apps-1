const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const cors = require('cors');
const bodyParser = require('body-parser');
const Convert = require('./Helper.js');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  var csv = Convert(req.body);
  console.log(csv);
});

app.listen(PORT, () => {
  console.log('server running at http://127.0.0.1: ' + PORT);
});
