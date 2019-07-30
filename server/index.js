const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  console.log('got to get request')
})


app.listen(3000, () => {
  console.log('App listening on port 3000')
});