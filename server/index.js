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

app.post('/api/addUser', (req, res) => {
  let { name, age, country } = req.body;
  req.app.get('db').addUser([name, age, country]).then(user => {
    res.status(200).send('It worked!')
  })
})


app.get('/api/users', (req, res) => {
  // if(req.query.name) {
  //   return req.app.get('db').getUserByName(req.query.name).then(user => {
  //     res.status(200).send(user)
  //   })
  // }
    req.app.get('db').getAllUsers().then(users => {
      if(req.query.name) {
        users = users.filter(e => {
          return e.name === req.query.name
          // if(e.name === req.query.name) {
          //   return e
          // }
        })
      }
      if(req.query.age) {
        users = users.filter(e => {
          return e.age === req.query.age
        })
      }
      res.status(200).send(users);
    })
})

app.listen(3000, () => console.log('Listening on port 3000 yo'));
