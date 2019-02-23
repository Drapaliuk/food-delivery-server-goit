const qs = require('querystring');
const fs = require('fs')

const saveUser = user => {
  fs.appendFile('src/db/users/users.json', user, function(err){})
};

const signUpRoute = (request, response) => {
  if (request.method === 'POST') {
    let body = '';

    request.on('data', function (data) {
      body = body + data;
      saveUser(data)

      console.log('Incoming data!!!!');
    });

    request.on('end', function () {
      const post = qs.parse(body);
      console.log(post);
    });

    response.end('succes')
    
  }
};

module.exports = signUpRoute;