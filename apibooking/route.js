import express from 'express';
import room from './model/AllDetails.js'

const route = express.Router();

route.get('/roomdetails', async (req, res) => {
    const data = await room.find();
    res.send(data)
});

route.post('/addRoom', async (req, res) => {
    const body = req.body;
    room.create(body);
    res.send("New Room Added Successfully!")
});

route.post('/bookaRoom', async (req, res)=>{
    const {roomId,name,date,time} = req.body;
    const roomData = await room.findOne({roomId: roomId});

    if(roomData) {
        const isDateAvailable = roomData.availableDate == date;
        const isTimeAvailable = roomData.availableTime.find((val)=>val==time);
        if(isDateAvailable && isTimeAvailable) {
            const modifiedBookingDetails = [...roomData.bookingDetails, {roomId, customerName: name, date, time, status:'booked'}];
            const modifiedAvailableTimes = roomData.availableTime.filter(data=>data!=time);
            const modifiedseatAvailable = roomData.seatAvailable - 1;

            await room.updateOne({roomId}, {$set:{roomId, seatAvailable: modifiedseatAvailable, availableTime: modifiedAvailableTimes, bookingDetails: modifiedBookingDetails}})

            res.send(`Room booked for ${name} and the date & time is ${date} ${time}`);
        } else {
            res.send(`room is not available for ${date} ${time}, Please check another date and time slot`);
        }
    } else {
        res.send('invalid room id')
    }
});

route.get('/customerDetails', async(req, res)=>{
    const allDetails = await room.find();
    const details = allDetails.map(data => data.bookingDetails);
    res.send(details)
})

export {route};