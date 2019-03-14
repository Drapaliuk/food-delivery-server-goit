const qs = require('querystring');
const fs = require('fs')




const createId = function(){
  const random = Math.random()
  const randomSecond = Math.random()
  const randomThird = Math.random()
  const id = parseInt((random * 1000) * (randomSecond * 1111) * (randomThird * 1989))
  return id
}



const transformer = function(data){

    let succes = {
        status: 'succes',
        user: undefined,
    }

    let uniqeId = createId()

    let keyId  = {
      id: uniqeId
    }

    let user = JSON.parse(fs.readFileSync('src/db/users/users.json', 'UTF8'))
    let dataParse = JSON.parse(data)
    succes.order = Object.assign(keyId, dataParse)
    user.push(succes)
    let final = JSON.stringify(user)
    fs.writeFileSync('src/db/users/users.json', final, function(){console.log('done')})
}





































const signUpRoute = (request, response) => {

    request.on('data', function (data) {
        transformer(data)
    })
   

    response.end('succes')

};


module.exports = signUpRoute;