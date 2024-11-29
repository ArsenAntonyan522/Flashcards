const router = require("express").Router();
const SchoolController = require("../controllers/School.controller");

router

  .get("/", SchoolController.getAllSchools)

  .get("/:id", SchoolController.getSchoolById);

module.exports = router;