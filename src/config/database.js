const { timeStamp } = require("node:console");

module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "1234",
    database: "aula",
    define: {
        timeStamp: true,
        underscored: true,
        underscoredAll: true,
    },
};