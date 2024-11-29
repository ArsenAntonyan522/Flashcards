const { School } = require("../db/models");

class SchoolService {
  static async getAll() {
    return await School.findAll();
  }

  static async getById(id) {
    return await School.findByPk(id);
  }
}

module.exports = SchoolService;