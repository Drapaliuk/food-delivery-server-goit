const mainRoute = require('./main/main');
const allProducts = require('./products/allProducts');
const signUpRoute = require('./users/sign-up-route');

const router = {
  '/signup': signUpRoute,
  '/all-products': allProducts,
  default: mainRoute
};

module.exports = router;
