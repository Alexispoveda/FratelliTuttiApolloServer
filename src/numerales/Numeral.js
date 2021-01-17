import {DataTypes} from 'sequelize';
import sequelize from '../db';

const Numeral = sequelize.define('Numeral',{
    numeral:{
        type: DataTypes.INTEGER,
        primaryKey:true,
    },
    capitulo:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    contenido:DataTypes.STRING
}
,{timestamps:false,tableName:'numerales'});

export default Numeral