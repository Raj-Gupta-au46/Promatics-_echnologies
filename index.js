const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const appliactionRoutes = require("./src/routes/routes");

const app = express();
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
mongoose
  .connect(
    "mongodb+srv://rajgupta07082000:sWyqqsVoISdVWbZy@cluster0.ebkpirm.mongodb.net/job_application",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Mongodb is connected"))
  .catch((err) => console.log(err));
const appliactionRoutes = require("./src/routes/routes");
app.use("/api", appliactionRoutes);
app.listen(5000, function () {
  console.log("Code is running");
});
