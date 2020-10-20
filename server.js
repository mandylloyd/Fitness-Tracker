// dependencies
const express = require("express");
const mongoose = require("mongoose");


// express app
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connect with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// still need to create html and api routes !!!!
app.use(require("/routes"));


//listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  