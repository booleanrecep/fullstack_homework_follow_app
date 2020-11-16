const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
require('dotenv').config()
/////
//mongoose connection/////////
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@test-1.fft2y.mongodb.net/homework_app?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);    
  
mongoose.connection
  .once("open", () => console.log("Connected to the database"))
  .on("error", (err) => console.log("Error with the database!", err));

//mongoose connection/////////

const PORT = process.env.PORT || 7000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
////routes/////
app.use("/api/get_all_data", require("./routes/get_all_data"));
app.use("/api/teachers", require("./routes/teachers"));
app.use("/api/schools",require("./routes/schools"))
app.use("/api/classrooms",require("./routes/classrooms"))
app.use("/api/branches",require("./routes/branches"))
app.use("/api/homeworks",require("./routes/homeworks"))

// app.get("/", (req, res) => {
//   res.send("<h4>Hi There</h4>");
// });
/////routes////
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("App running on port : ", PORT));
