/* eslint-disable no-unused-vars */
const ManService = require("../services/Man.service");
const isValidId = require("../utils/isValidId");
const Validator = require("../utils/universalValidator");
const formatResponse = require("../utils/formatResponse");

class ManController {
  static async getAllMen(req, res) {
    try {
      const men = await ManService.getAll();

      if (men.length === 0) {
        return res.status(204).json(formatResponse(204, "No men found", []));
      }

      res.status(200).json(formatResponse(200, "success", men));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getManById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid man ID"));
    }

    try {
      const man = await ManService.getById(+id);

      if (!man) {
        return res
          .status(404)
          .json(formatResponse(404, `Man with id ${id} not found`));
      }

      res.status(200).json(formatResponse(200, "success", man));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = ManController;
