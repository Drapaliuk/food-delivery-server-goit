const qs = require('querystring');
const fs = require('fs')


const getProducts = function(id){
    const y = JSON.parse(fs.readFileSync('allProducts.json'))
    const x = y.filter(num => num.id === id)
    return x
}



const getNameProducts = function(id){

    const arrForJob = getProducts(id)
    let emptyArr = []

    arrForJob.forEach(element => {
        emptyArr.push(element.name)
    });
    console.log(emptyArr)
}


const transformer = function(data){
    let succes = {
        status: 'succes',
        order: undefined,
    }
    let user = JSON.parse(fs.readFileSync('src/db/orders/orders.json', 'UTF8'))
    let dataParse = JSON.parse(data)
    succes.order = dataParse
    user.push(succes)
    let final = JSON.stringify(user)
    fs.writeFileSync('src/db/orders/orders.json', final, function(){console.log('done')})
}




const signUpRoute = (request, response) => {

    request.on('data', function (data) {
        transformer(data)
    })


    request.on('end', function () {
    });
   
    response.end('succes')

};


module.exports = signUpRoute;