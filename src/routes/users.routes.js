const {Router} = require('express')
const { allUsers, createUser, deleteUser, updateUser } = require('../controllers/users.controller')

const router = Router()

router.get('/api/v1/users', allUsers) 

router.post('/api/v1/users', createUser)

router.put('/api/v1/users/:id', updateUser)

router.delete('/api/v1/users/:id', deleteUser)

module.exports = router