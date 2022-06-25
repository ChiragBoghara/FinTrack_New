const MainData = require("../models/maindata");

exports.getMainData = async (req, res) => {
  try {
    const maindata = await MainData.findOne({
      userid: req.user._id,
      month: req.query.month,
      year: req.query.year,
    });

    if (maindata) {
      return res.status(200).send(maindata);
    }
    res.status(200).send({
      message: "No data Found",
    });
  } catch (e) {
    res.status(404).send({
      status: "Fail",
      message: e,
    });
  }
};

exports.addMainData = async (req, res) => {
  try {
    const maindata = new MainData({
      userid: req.user._id,
      month: req.body.month,
      year: req.body.year,
      total_income: req.body.total_income,
      total_expense: req.body.total_expense,
      total_balance: req.body.total_balance,
    });

    await maindata.save();

    res.status(200).send(maindata);
  } catch (e) {
    res.status(404).send({
      status: "Fail",
      message: e,
    });
  }
};

exports.updateMainData = async (req, res) => {
  try {
    const maindata = await MainData.findOneAndUpdate(
      { userid: req.user._id, month: req.body.month, year: req.body.year },
      {
        total_income: req.body.total_income,
        total_expense: req.body.total_expense,
        total_balance: req.body.total_balance,
      },
      {
        //updated document will be returned
        new: true,
        runValidators: true,
      }
    );

    if (!maindata) {
      return res.status(404).send();
    }

    res.status(200).send(maindata);
  } catch (e) {
    res.status(404).send({
      status: "Fail",
      message: e,
    });
  }
};
