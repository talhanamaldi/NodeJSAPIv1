const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  define: {
    timestamps: false,
  },

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require("./employeeModel.js")(sequelize, Sequelize);

module.exports = db;
