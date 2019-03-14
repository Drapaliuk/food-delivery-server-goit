const express = require('express')
const router = express.Router()

const mainRoute = require('./main/main');
const allProducts = require('./get all products/allProducts');
const signUpRoute = require('./sign-up-user/sign-up-route');
const getUser = require('./get user by id/getUser')
const getCat = require('./get products by category/getCat')
const getById = require('./get products by id/getById')
const createOrder = require('./create-order/createOrder')

const routess = router
.get('/', mainRoute)
.get('/all-products', allProducts)
.get('/getUser', getUser)
.get('/get-by-category', getCat)
.get('/get-products-by-id', getById)

.post('/signup', signUpRoute)
.post('/create-order', createOrder)

module.exports = routess;
