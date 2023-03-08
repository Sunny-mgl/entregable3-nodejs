const TodoServices = require("../services/todo.service")


const allTodos = async (req, res) => {
    try {
        const todo = await TodoServices.getAll()
        res.json(todo)
    } catch (error) {
        res.status(400).json(error)
    }
    }

const  getTodoAndUsers = async (req, res) => {
    try {
        const {todoId} = req.params
        const todoAndUsers = await TodoServices.todoAndUsers(todoId)
        res.json(todoAndUsers)
    } catch (error) {
        res.status(400).json(error)
    }
}

const  createTodos = async (req, res) => {
    try {
        const bodyTodo = req.body 
        const todo = await TodoServices.create(bodyTodo)
        res.status(201).json(todo)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateTodo = async (req, res) => {
 try {
    const{id} = req.params 
    const updateTo = req.body
    await TodoServices.update(updateTo, id)
    res.status(204).send()
 } catch (error) {
    res.status(400).json(error)
 }
}

const statusTodo = async (req, res) => {
    try {
        const {id} = req.params
        const statuTodo= req.body
        await TodoServices.update(statuTodo, id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const  deleteTodos = async (req, res) => {
    try {
        const {id} = req.params 
        await TodoServices.delete(id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}
    
    module.exports = {
        allTodos,  
        createTodos,  
        getTodoAndUsers, 
        updateTodo, 
        statusTodo, 
        deleteTodos
    }