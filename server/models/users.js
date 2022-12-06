const {DataTypes} = require('sequelize')
const db = require('../db')

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recordPoints: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
},{
    timestamps: false
})

Users.sync({alter: true})

module.exports = Users