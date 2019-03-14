const fs = require('fs')
const querystring = require('querystring')
const url = require('url')

const findById = function(category){

    fs.readFile('allProducts.json', function(err, data){
    const findFootById = JSON.parse(data).filter(elem => elem.categories[0] === category)
    const jsonTransform = JSON.stringify(findFootById)
    fs.writeFile('services files/service-file.json', jsonTransform, function(){})

})}



const findByCattegory = (request, response) => {
    const category = url.parse(request.url, true).query.category

    findById(category)

    response.writeHead(200, {
        'Content-Type': 'application/json',
    });

    const readFile = fs.createReadStream('services files/service-file.json')
    readFile.pipe(response)
}

module.exports = findByCattegory;



