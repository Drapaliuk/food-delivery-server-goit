const Order = require('../../db/schemas/order');

const createOrder = (request, response) => {
  const order = request.body;
  console.log(order)
  const newOrder = new Order(order);

  const sendResponse = (order) => {
    console.log(order);

    response.json({
      status: 'success',
      order
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'user was not saved'
    });
  };

  newOrder.save()
    .then(sendResponse)
    .catch(sendError)

};

module.exports = createOrder