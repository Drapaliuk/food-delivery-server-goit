const express = require('express');
const mainRoute = require('./main/main');
const getUser = require('./user/get-user');
const deleteUser = require('./user/delete-user');
const getAllUser = require('./user/get-all-users');
const createUser = require('./user/create-user');
const updateUser = require('./user/update-user');
const createOrder = require('./order/create-order');
const ordersById = require('./order/orders by id')
const updateProduct = require('./products/update-products')

const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)
  .get('/users', getAllUser)
  .get('/users/:id', getUser)
  .get('/orders/:id', ordersById)
  .delete('/users/:id', deleteUser)

  .put('/user/:id', updateUser)
  .put('/products/:id', updateProduct)

  .post('/user', createUser)
  .post('/orders', createOrder)


module.exports = apiRoutes;

















// {
// 	"creator": "sdaaaada2123daedw",
// 	"productsList": [{
// 		"product": "asfaddadqw2212e213asda",
// 		"type": "M",
// 		"itemsCount": 322
// 	}],
// 	"deliveryType": "delivery",
// 	"deliveryAddress": "Brooklyn, central park"
// 	"sumToPay": 878,
// 	"status": "inProgress"
// }
