import mongoose from "mongoose";
const ScheduleSchema = new mongoose.Schema(
  {
    cityDepature: {
        type: String,
        required: true,
    }, 
    cityArrival: {
        type: String,
        required: true,
    }, 
    dateDep: {
        type: Date,
        required: true,
    }, 
    dateArr: {
        type: Date,
        required: true,
    }, 
    airPortDep: {
        type: String
    },
    airPortArr: {
        type: String
    },
    timeGo: {
        type: String
    }, 
    timeOn: {
        type: String
    }, 
    plane: {
        type: String
    },
    seatType: {
        type: String,
        required: true,
    }, 
    // passenger: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    // }, 
    price:{
        type: Number,
        default: 1000000
    },
    weight: {
        type: Number,
        default: 20
    },
    seatNumbers: [{ number: Number, unavailableDates: {type: [Date]}}]
  },
  { timestamps: true }
);

export default mongoose.model("Schedule", ScheduleSchema);
