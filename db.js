const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "postgres://brad:brad1234@tododb.cngw0sh5fmt2.us-east-2.rds.amazonaws.com:5432/tododb"
);

const todo = require("./models/todo")(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
};

db.sequelize.sync(/*{ force: true }*/);

module.exports = db;