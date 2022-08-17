const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const dataRoutes = require("./Routes/Route.js");

const app = express();

mongoose
  .connect(
    "mongodb+srv://nitesh:nitesh123@cluster0.o42nqpp.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api/Data", dataRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
