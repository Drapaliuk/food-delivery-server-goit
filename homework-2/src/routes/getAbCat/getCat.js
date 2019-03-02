const fs = require('fs')
const querystring = require('querystring')
const url = require('url')


const mainFunction = function(category){
    fs.readFile('allProducts.json', function(err, data){
    const y = JSON.parse(data).filter(elem => elem.categories[0] === category)
    const x = JSON.stringify(y)
    fs.writeFile('transitFileGetByCategory.json', x, function(){
    
    })
})}

const mainRoute = (request, response) => {
    const category = url.parse(request.url, true).query.category

    mainFunction(category)

    response.writeHead(200, {
        'Content-Type': 'application/json',
    });

    const readFile = fs.createReadStream('./transitFileGetByCategory.json')

    readFile.pipe(response)
}

module.exports = mainRoute;



