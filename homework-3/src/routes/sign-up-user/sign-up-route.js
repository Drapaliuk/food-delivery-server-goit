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
    let user = JSON.parse(fs.readFileSync('src/db/users/users.json', 'UTF8'))
    data.id = uniqeId
    user.push(data)
    let final = JSON.stringify(user)
    fs.writeFileSync('src/db/users/users.json', final, function(){console.log('done')})
}


const signUpRoute = (request, response) => {
    const user =  request.body
    console.log(user)

    transformer(user)
   

    response.json({
        "status":"succes",
        "user": user
    })

};


module.exports = signUpRoute;

















































// onst transformer = function(data){
//     let succes = {
//         status: 'succes',
//         user: undefined,
//     }

//     let uniqeId = createId()
//     let keyId  = {
//       id: uniqeId
//     }

//     let user = JSON.parse(fs.readFileSync('src/db/users/users.json', 'UTF8'))

//     let dataParse = JSON.parse(data)

//     succes.order = Object.assign(keyId, dataParse)

//     user.push(succes)

//     let final = JSON.stringify(user)
    
//     fs.writeFileSync('src/db/users/users.json', final, function(){console.log('done')})
// }