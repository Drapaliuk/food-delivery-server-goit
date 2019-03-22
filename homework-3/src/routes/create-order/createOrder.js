const fs = require('fs')

const createId = function(){
    const random = Math.random()
    const randomSecond = Math.random()
    const randomThird = Math.random()
    const id = parseInt((random * 1000) * (randomSecond * 1111) * (randomThird * 1989))
    return id
  }

const transformer = function(data){
    let uniqeId = createId()
    let user = JSON.parse(fs.readFileSync('src/db/orders/orders.json', 'UTF8'))
    data.id = uniqeId
    user.push(data)
    let final = JSON.stringify(user)
    fs.writeFileSync('src/db/orders/orders.json', final, function(){console.log('done')})
}


const createOrder  = (request, response) => {
    const data = request.body
    transformer(data)
       
    response.json({
        "status":"succes",
        "order": data
    })

};


module.exports = createOrder