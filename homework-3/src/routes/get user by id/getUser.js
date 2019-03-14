const fs = require('fs')
const querystring = require('querystring')
const url = require('url')


const mainFunction = function(id){
    fs.readFile('src/db/users/users.json', function(err, data){
    const y = JSON.parse(data).filter(elem => elem.order.id === id)
    const x = JSON.stringify(y)
    fs.writeFile('services files/service-file.json', x, function(){
    
    })
})}



const mainRoute = (request, response) => {
    const id = Number(url.parse(request.url, true).query.id)

    mainFunction(id)

    response.writeHead(200, {
        'Content-Type': 'application/json',
    });

    const readFile = fs.createReadStream('services files/service-file.json')

    readFile.pipe(response)
}

module.exports = mainRoute;