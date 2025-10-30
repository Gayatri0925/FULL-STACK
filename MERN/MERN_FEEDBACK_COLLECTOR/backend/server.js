const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const feedbackRoute = require("./routes/feedback");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mern_feedback");

app.use("/api/feedback", feedbackRoute);

app.listen(5001, () => console.log("Feedback backend running"));
