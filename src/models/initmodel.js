const User = require('../models/users.models')
const Todo = require ('../models/todo.models')
const Category = require('../models/categories.models')

const initModels = () => {
    User.hasMany(Todo, {
        foreignKey: 'authors'
    })
    Todo.belongsTo(User, {
        foreignKey: 'authors'
    })

// 

    Category.hasMany(Todo, {
        foreignKey: 'categoryId'
    })
    Todo.belongsTo(Category, {
        foreignKey: 'categoryId'
    })
}

module.exports = initModels