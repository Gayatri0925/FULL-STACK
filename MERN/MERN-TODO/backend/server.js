const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tasksRoute = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mern_todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/api/tasks", tasksRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
