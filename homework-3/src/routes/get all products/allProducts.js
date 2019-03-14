const fs = require('fs');

const allProducts = (request, response) => {
    
    response.writeHead(200, {
        'Content-Type': 'application/json',
    });

    const readFile = fs.createReadStream('allProducts.json')
    readFile.pipe(response)
}

module.exports = allProducts;

allProducts.json