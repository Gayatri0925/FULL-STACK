const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRoute = require("./routes/notes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mern_notes");

app.use("/api/notes", notesRoute);

app.listen(5002, ()=>console.log("Notes backend running"));
