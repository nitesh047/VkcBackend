const router = require("express").Router();
const Data = require("../Models/Data.js");

router.post("/", async (req, res) => {
  const newData = new Data(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const allData = await Data.find();
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
