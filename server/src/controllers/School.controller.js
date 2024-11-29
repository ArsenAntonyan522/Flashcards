/* eslint-disable no-unused-vars */
const SchoolService = require("../services/School.service");
const isValidId = require("../utils/isValidId");
const Validator = require("../utils/universalValidator");
const formatResponse = require("../utils/formatResponse");

class SchoolController {
  static async getAllSchools(req, res) {
    try {
      const schools = await SchoolService.getAll();

      if (schools.length === 0) {
        return res.status(204).json(formatResponse(204, "No schools found", []));
      }

      res.status(200).json(formatResponse(200, "success", schools));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getSchoolById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid school ID"));
    }

    try {
      const school = await SchoolService.getById(+id);

      if (!school) {
        return res
          .status(404)
          .json(formatResponse(404, `School with id ${id} not found`));
      }

      res.status(200).json(formatResponse(200, "success", school));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = SchoolController;