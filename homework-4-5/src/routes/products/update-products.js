const Product = require('../../db/schemas/products');

const updateProduct = (request, response) => {
  const product = request.body;
  const id = request.params.id;
  console.log(id)
  console.log(product)

  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such product'
    });
  };

  const sendResponse = (newProducts) => {
    if (!newProducts) {
      return sendError();
    }

    response.json({
      status: 'success',
      products: newProducts
    });
  };

  Product
    .findOneAndUpdate(
      { _id: id },
      product,
      { new: true } // вернуть обновленный документ
    )
    .then(sendResponse)
    .catch(sendError)

};

module.exports = updateProduct;