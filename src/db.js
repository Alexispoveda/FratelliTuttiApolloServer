import Sequelize from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../fratelli.db'
})

export default sequelize