const createId = function(){

    const random = Math.random()
    const randomSecond = Math.random()
    const randomThird = Math.random()

    const id = parseInt((random * 1000) * (randomSecond * 1111) * (randomThird * 1989))

    return id
}

module.exports = createId