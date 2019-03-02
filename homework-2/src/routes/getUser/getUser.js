const query = require('querystring');
const url = require('url')
const fs = require('fs')

const getUser = (request, response) => {
    
  const id = url.parse(request.url, true).query.id

  response.end( 'halli'

  // fs.readFile('data/allProducts.json', function(err, data){
  //   JSON.parse(data).filter(elem => elem.id === id)
  // })
  )

}

module.exports = getUser