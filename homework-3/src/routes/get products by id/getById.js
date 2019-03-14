const fs = require('fs')
const querystring = require('querystring')
const url = require('url')


const findById = function(id){

    fs.readFile('allProducts.json', function(err, data){
    const findFootById = JSON.parse(data).filter(elem => elem.id === id)
    const jsonTransform = JSON.stringify(findFootById)
    fs.writeFile('services files/service-file.json', jsonTransform, function(){})

})}



const byIdRoute = (request, response) => {
    const id = Number(url.parse(request.url, true).query.id)

    findById(id)

    response.writeHead(200, {
        'Content-Type': 'application/json',
    });

    const readFile = fs.createReadStream('services files/service-file.json')

    readFile.pipe(response)
}

module.exports = byIdRoute;



