const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect mongoose
mongoose.connect("mongodb+srv://Nidhi:1604@cluster0.cjk7r.mongodb.net/notesDB");

//routes
app.use("/", require("./routes/noteRoute"));

app.listen(3001, function () {
  console.log("Server App is running on Port 3001");
});
