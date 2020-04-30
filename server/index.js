var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3003;

app.use(bodyParser.json());
app.use(express.static('client/dist'))


app.listen(port, () => {console.log(`listening on port ${port}`)});