import { createError } from "../utils/error.js";
import Order from "../models/Order.js";
import User from "../models/User.js";

export const createOrder = async (req, res, next) => {
    const userId = req.params.userid;
    const newOrder = new Order(req.body);

    try {
      const savedOrder = await newOrder.save();
      try {
        await User.findByIdAndUpdate(userId, {
          $push: { orders: savedOrder._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedOrder);
    } catch (err) {
      next(err);
    }
  };

  export const getOrder = async (req,res,next)=>{
    try {
      const orders = await Order.findById(req.params.id);
      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  }