const { DataTypes } = require('sequelize')
const db = require('../utils/db')

const User = db.define('users', {
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   username: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
   }, 
   email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
    }
   },
   password: {
    type: DataTypes.STRING,
    allowNull: false
   }
})

module.exports = User