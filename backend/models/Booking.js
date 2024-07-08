
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const User = require('./usermodel'); // Adjust the path as per your project structure

// const bookingSchema = new Schema([{
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     slot: { type: String, required: true },
//     appointmentDate: { type: Date, required: true },
//     ticketPrice: { type: Number, default: 100 }, // Default ticket price
//     user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
// }]);

// module.exports = mongoose.model('Booking', bookingSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    slot: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    ticketPrice: { type: Number, default: 100 }, // Default ticket price
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
});

module.exports = mongoose.model('Booking', bookingSchema);
