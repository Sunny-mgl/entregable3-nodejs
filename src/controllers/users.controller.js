const UserServices = require("../services/users.service")

const allUsers = async (req, res) => {
    try {
        const users = await UserServices.getAll()
        res.json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createUser = async (req, res) => {
   try {
     const userBody = req.body 
     const newUser = await UserServices.create(userBody)
     res.status(201).json(newUser)
   } catch (error) {
    res.status(400).json(error)
   }
}

const updateUser = async (req, res) => {
  try {
    const {id} = req.params
    const updateUse = req.body
    await UserServices.update(updateUse, id)
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

const deleteUser = async ( req, res) => {
    try {
        const {id} = req.params
        await UserServices.delete(id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    allUsers, createUser, updateUser, deleteUser
}