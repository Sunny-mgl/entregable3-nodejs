const {DataTypes, Model} = require('sequelize')
const db = require('../utils/db')

const Todo = db.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true
  }, 
  title:{
     type: DataTypes.STRING(100),
     allowNull: false
  }, 
  description:{
    type: DataTypes.TEXT,
    allowNull: false
  }, 
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  authors: {
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id'
  }
}, {
    timestamps: true, //fecha de 
    updatedAt: false,   //fecha de actualizacion
})


module.exports = Todo