import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables as early as possible
dotenv.config();

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import colRoute from "./route/col.route.js";
import visitRoute from "./route/visit.route.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to mongoDB"))
.catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1); // Exit the process with an error code
});

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/col", colRoute);
app.use("/visit", visitRoute);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
