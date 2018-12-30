const Sequelize = require('sequelize');
const dbu = process.env.DB_USERNAME;
const dbp = process.env.DB_PASSWORD;
const dba = process.env.DB_ADDRESS;

const db_url = "postgres://" + dbu + ":" + dbp + "@" + dba;

const sequelize = new Sequelize(db_url);

const todo = require("./models/todo")(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
};

db.sequelize.sync(/*{ force: true }*/);

module.exports = db;