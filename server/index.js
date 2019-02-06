const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000

app.use(express.static('./public/dist'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, ()=> {console.log(`listening on port number: ${port}`)});

app.get('/movies/api', (req,res) => {
  res.send('Hello World');
});