const fs = require('fs')
// const querystring = require('querystring')
// const url = require('url')


const mainFunction = function(id){
    fs.readFile('src/db/users/users.json', function(err, data){
    const y = JSON.parse(data).filter(elem => elem.order.id === id)
    const x = JSON.stringify(y)
    fs.writeFile('services files/service-file.json', x, function(){
    
    })
})}

const findById = function(id){

    fs.readFile('src/db/users/users.json', function(err, data){
    const findFootById = JSON.parse(data).filter(elem => elem.id === id)
    console.log(findFootById.length)
    if(findFootById.length === 0){
        return false
    }
    const jsonTransform = JSON.stringify(findFootById)
    fs.writeFile('services files/service-file.json', jsonTransform, function(){})

})}



const mainRoute = (request, response) => {
    const id = Number(request.params.id)

    if(!findById(id)){
        response.JSON({"status": "broken"})
        return
    }else{
        findById(id)
    }


    response.writeHead(200, {
        'Content-Type': 'application/json',
    });

    const readFile = fs.createReadStream('services files/service-file.json')

    readFile.pipe(response)
}

module.exports = mainRoute;