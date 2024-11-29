const { Cat } = require("../db/models");

class CatService {
  static async getAll() {
    return await Cat.findAll();
  }

  static async getById(id) {
    return await Cat.findByPk(id);
  }
}

module.exports = CatService;
