const mongoose = require("mongoose");

const maindataSchema = mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    total_income: {
      type: String,
      default: "0.0",
    },
    total_expense: {
      type: String,
      default: "0.0",
    },
    total_balance: {
      type: String,
      default: "0.0",
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
);

const MainData = mongoose.model("MainData", maindataSchema);

module.exports = MainData;
