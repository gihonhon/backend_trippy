import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
    {
        totalPrice: {
            type: Number,
        },
        fullname: {
            type: String,
        },
        book: {
            type: String,
        }
    },
    { timestamps: true }
)

export default mongoose.model("Order", OrderSchema)