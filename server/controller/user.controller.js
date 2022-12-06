const Users = require('../models/users')

class UserController{
    async createUser(req, res){
        const {name} = req.body
        try{
            const isExists = await Users.findOne({
                where: {
                    name: name
                }
            })
            if(isExists){
                return res.status(400).json({
                    message: 'User already exists'
                })
            }
            if(name.length < 5){
                return res.status(400).json({
                    message: 'Name is too short'
                })
            }
            const newUser = await Users.create({
                name: name
            })
            res.status(200).json(newUser)
        }catch(e){
            res.status(400).json({
                message: e.message
            })
        }
    }

    async updateRecord(req, res){
        const {points, name} = req.body
        const isExists = await Users.findOne({where: {name: name}})
        if(points && isExists){
            try{
                await Users.update({
                        recordPoints: points
                    },
                    {
                        where: {
                            name: name
                        }
                    })
                res.json({
                    message: "Successfully updated"
                })
            }catch(e){
                res.status(400).json({
                    message: 'Error updating points'
                })
            }
        }else{
            return res.status(400).json({
                message: "Incorrect name or points"
            })
        }
    }

    async getRecordUsers(req, res){
        const users = await Users.findAll({order: [
                ['recordPoints', 'DESC']
            ],
            limit: 10
        },)
        return res.send(users)
    }

    async getByName(req, res){
        const {name} = req.params
        const user = await Users.findOne({
            where: {
                name: name
            }
        })
        return res.send(user)
    }
}

module.exports = new UserController()