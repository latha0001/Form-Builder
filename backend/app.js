require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formRoutes = require("./routes/formRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", formRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

module.exports = app;
