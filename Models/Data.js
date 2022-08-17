const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    Question1: {
      type: String,
      required: true,
    },

    Question2: {
      type: String,
      required: true,
    },
    Question3: {
      type: String,
      required: true,
    },
    Question4: {
      type: String,
      required: true,
    },
    Question5: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
