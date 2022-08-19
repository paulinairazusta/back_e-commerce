const Order = require("../models/orderModel");
const User = require("../models/userModel");

module.exports = async () => {
  const user = await User.findOne({ firstname: "Juan" });
  await Order.deleteMany({});
  const order = new Order({
    products: [
      {
        name: "Coconut tart",
        quantity: 1,
        price: 100,
      },
    ],
    status: "Being prepared",
    date: new Date(),
    totalPrice: 100,
    user: user._id,
  });
  order.save();
  await User.findByIdAndUpdate(req.body.user._id, {
    $push: { orderList: order._id },
  });
  console.log("Order has been created!");
};
