const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const database = require("./config/database");
const {cloudinaryConnect}=require("./config/cloudinary");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

// Connect to the database
database.connect();
cloudinaryConnect();

// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],

        credentials: true,
    })
);


// Connect to Cloudinary
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);


// Default route
app.get("/", (req, res) => {
    return res.json(
        {
            success: true,
            message: 'Your server is up and running....',
        });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error("Global error handler:", err.stack);
    res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
    console.log("Server connected successfully and is ready to handle requests.");

});
