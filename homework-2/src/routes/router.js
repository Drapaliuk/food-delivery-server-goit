const mainRoute = require('./main/main');
const allProducts = require('./products/allProducts');
const signUpRoute = require('./users/sign-up-route');
const getUser = require('./getUser/getUser')
const getCat = require('./getAbCat/getCat')
const getById = require('./getById/getById')


const router = {
  '/signup': signUpRoute,
  '/all-products': allProducts,
  '/getUser': getUser,
  '/get-by-category': getCat,
  '/get-by-id': getById,
  default: mainRoute
};

module.exports = router;
