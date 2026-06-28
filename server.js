require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());
// app.get("/api/tasks", (res, req) => {
//   console.log("Request hit here");
// //   res.send("Tasks route working");
// });

app.use("/api/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.log(err));
