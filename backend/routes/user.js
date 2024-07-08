const express = require("express");
const userController = require("../controllers/usercontroller");
const router = express.Router();

// Define routes and link them to controller functions
router.post("/register", userController.register); // Register a new user
router.post("/login", userController.login); // User login


router.get('/user-profile/:userEmail',userController. getUserProfile);
router.get('/user-bookings/:userEmail',userController. getUserBookings);

module.exports = router;

