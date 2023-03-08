const {Router} = require('express')
const {allTodos, createTodos, getTodoAndUsers, deleteTodos, updateTodo, statusTodo} = require('../controllers/todo.controller')

const router = Router()

router.get('/api/v1/todos', allTodos)

router.get('/api/v1/todos/:todoId/users', getTodoAndUsers)

router.post('/api/v1/todos', createTodos)

router.put('/api/v1/todos/:id', updateTodo)

router.put('/api/v1/statu/:id', statusTodo)

router.delete('/api/v1/todos/:id', deleteTodos)

module.exports= router