const User = require("../models/users.models")


class UserServices {
    static async getAll() {
        try {
            const result = await User.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async create(userBody) {
        try {
            const result = await User.create(userBody)
            return result
        } catch (error) {
            throw error
        }
    }

    static async update(updateUse, id){
        try {
            const result = await User.update(updateUse, {
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
        try {
            const result = await User.destroy({
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices