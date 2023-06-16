import { createError } from "../utils/error.js";
import Schedule from "../models/Schedule.js";

export const createSchedule = async (req, res, next) => {
    const newSchedule = new Schedule(req.body)
    try {
    //   const { cityDepature, cityArrival, dateDep, dateArr, seatType, passenger } = req.body;
  
      // Create a new Schedule instance with the provided data

  
      // Save the new schedule to the database
      const createdSchedule = await newSchedule.save();
      res.status(201).json(createdSchedule);
    } catch (err) {
      next(err);
    }
  };

  export const getSchedules = async (req, res, next) => {
    try {
      const { cityDepature, cityArrival, dateDep, dateArr, seatType } = req.query;
  
      const query = {};
      if (cityDepature) {
        query.cityDepature = cityDepature;
      }
  
      if (cityArrival) {
        query.cityArrival = cityArrival;
      }
  
      if (dateDep) {
        query.dateDep = dateDep;
      }
  
      if (dateArr) {
        query.dateArr = dateArr;
      }
  
      if (seatType) {
        query.seatType = seatType;
      }
  
      const schedules = await Schedule.find(query);
      
      res.status(200).json(schedules);
    } catch (err) {
      next(err);
    }
  };

  export const getSchedule = async (req, res, next) => {
    try {
      const schedule = await Schedule.findById(req.params.id);
      res.status(200).json(schedule);
    } catch (err) {
      next(err);
    }
  };