const router = require("express").Router();
const ManController = require("../controllers/Man.controller");

router

  .get("/", ManController.getAllMen)

  .get("/:id", ManController.getManById);

module.exports = router;
