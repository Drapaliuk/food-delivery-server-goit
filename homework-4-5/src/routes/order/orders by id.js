const Order = require('../../db/schemas/order');

const getOrder = (request, response) => {
  const id = request.params.id;
  
  const sendResponse = (user) => {
    response.status(200);
    response.json(user);
  };

  const findOrder = Order.findById(id);

  Promise.all([findOrder])
    .then(sendResponse)
    .catch(err => {
      console.error(err)
    });
};

module.exports = getOrder;
