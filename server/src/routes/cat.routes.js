const router = require("express").Router();
const CatController = require("../controllers/Cat.controller");

router

  .get("/", CatController.getAllCats)

  .get("/:id", CatController.getCatById);

module.exports = router;