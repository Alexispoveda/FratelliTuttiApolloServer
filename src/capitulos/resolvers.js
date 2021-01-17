import Capitulo from'./Capitulo';
import Numeral from'../numerales/Numeral';

const resolvers = {
    Query: {
        capitulos: (_, args) => Capitulo.findAll(),
        capitulo: (_, args) => Capitulo.findByPk(args.capitulo)
    },
    Capitulo:{
        numerales: parent => Numeral.findAll({where:{capitulo: parent.capitulo}})
    }
};

export default resolvers