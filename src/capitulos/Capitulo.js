import {DataTypes} from 'sequelize';
import sequelize from '../db';
import Numeral from '../numerales/Numeral'

const Capitulo = sequelize.define('Capitulo',{
    capitulo:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:DataTypes.STRING
},{timestamps:false,tableName:'capitulos'})

Capitulo.hasMany(Numeral, {foreignKey:'capitulo'})
Numeral.belongsTo(Capitulo, {foreignKey:'capitulo'})

export default Capitulo