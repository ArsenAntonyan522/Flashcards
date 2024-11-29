const { Man } = require("../db/models");

class ManService {
  static async getAll() {
    return await Man.findAll();
  }

  static async getById(id) {
    return await Man.findByPk(id);
  }
}

module.exports = ManService;