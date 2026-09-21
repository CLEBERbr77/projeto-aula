const { timeStamp } = require("node:console");

module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "secret",
    database: "aula",
    define: {
        timeStamp: true,
        underscored: true,
        underscoredAll: true,
    },
};