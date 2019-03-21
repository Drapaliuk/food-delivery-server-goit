const fs = require('fs')
const mongoose = require('mongoose')
const Products = require('../../db/schemas/products');

mongoose.connect('mongodb+srv://vitalii:qwerty12121@food-delivery-project-wbz66.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
.then(()=>{console.log('connect')})

// const data = JSON.parse(fs.readFileSync('allProducts.json'))


const saver = function(data){

    data.forEach(element => {
        const newProducts = new Products(element)
        newProducts.save().then(()=>console.log('succes'))
    });
}

// saver(data)

let id = '5c924991a37ad82368b4da3e'


const po = Promise.all([Products.findById(id)]).then(function(data){console.log(data)})
console.log(po)