const {Sequelize} = require('sequelize')

const db = new Sequelize ({
    database: 'entregable_todo',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Sunny',
    dialect: 'postgres'
})

module.exports = db

// es el nombre de una instacia