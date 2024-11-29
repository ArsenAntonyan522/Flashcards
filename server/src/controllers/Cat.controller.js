/* eslint-disable no-unused-vars */
const CatService = require("../services/Cat.service");
const isValidId = require("../utils/isValidId");
const Validator = require("../utils/universalValidator");
const formatResponse = require("../utils/formatResponse");

class CatController {
  static async getAllCats(req, res) {
    try {
      const cats = await CatService.getAll();

      if (cats.length === 0) {
        return res.status(204).json(formatResponse(204, "No cats found", []));
      }

      res.status(200).json(formatResponse(200, "success", cats));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getCatById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid cat ID"));
    }

    try {
      const cat = await CatService.getById(+id);

      if (!cat) {
        return res
          .status(404)
          .json(formatResponse(404, `Cat with id ${id} not found`));
      }

      res.status(200).json(formatResponse(200, "success", cat));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = CatController;
