const express = require("express");
const auth = require("../middleware/auth")
const mainDataController = require("../controllers/mainDataController");

const mainDataRouter = new express.Router();

mainDataRouter.get("/maindata", auth, mainDataController.getMainData);
mainDataRouter.post("/maindata",auth, mainDataController.addMainData);
mainDataRouter.put("/maindata",auth,  mainDataController.updateMainData);

module.exports = mainDataRouter;
