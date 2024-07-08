const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');

dotenv.config();

const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');
const bookingRoute = require('./routes/booking');
// const reviewRoute = require("./routes/review");

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true
};

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/doctor_booking", {
            useNewUrlParser: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process.exit(1); // Exit process with failure
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/v1/auth", adminRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/booking", bookingRoute);
// app.use("/api/v1/reviews", reviewRoute);

app.get('/generate-token', (req, res) => {
    const token = jwt.sign({ id: 'doctor_id' }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    res.send({ token });
});

connect().then(() => {
    app.listen(port, () => {
        console.log("Server listening on port", port);
    });
});
