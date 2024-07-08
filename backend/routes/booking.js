
const express = require('express');
const { createBooking, deleteBooking, getAllBooking,  } = require('../controllers/doctorBooking');

const router = express.Router();

router.post('/book', createBooking);



router.put('/deletebooking/:id', deleteBooking);
router.get('/allbooking', getAllBooking);




module.exports = router;
