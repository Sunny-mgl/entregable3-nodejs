const Category = require("../models/categories.models")
const Todo = require("../models/todo.models")
const User = require("../models/users.models")


class TodoServices {
    static async getAll() {
        try {
            const result = await Todo.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async todoAndUsers(todoId) {
        try {
            const result = await Todo.findByPk(todoId, {
                attributes: { exclude: ['categoryId', 'authors'] },
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    },
                    {
                        model: Category,
                        attributes: ['name']
                    }
                ]
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async create(bodyTodo) {
        try {
            const result = await Todo.create(bodyTodo)
            return result
        } catch (error) {
            throw error
        }
    }

    static async update(updateTo, id) {
        try {
            const result = await Todo.update(updateTo, {
               where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async update(statuTodo, id) {
        try {
            const result = await Todo.update(statuTodo, {
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
        try {
            const result = await Todo.destroy({
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = TodoServices