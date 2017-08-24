const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      massive = require('massive');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connection string -->>
// postgres://[username]:[password]@[host]:[port]/[database]

massive('postgres://postgres:@localhost/class-demo').then(db => {
  app.set('db', db);


  // initializing database with seed file
  
  app.get('db').init.seed_file().then(res => console.log(res))
    .catch(err => console.log(err))

})

app.get('/api/getAllFromTest', (req, res) => {
  req.app.get('db').getAllFromTest().then(data => {
    res.status(200).send(data)
  })
})

app.post('/api/postData', (req, res) => {
  req.app.get('db').postData(req.body.stuff).then(posted => {
    res.status(200).send('it worked!')
  })
})




app.listen(3000, () => console.log('Listening on port 3000 yo'));
