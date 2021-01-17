import Numeral from './Numeral';
import Capitulo from '../capitulos/Capitulo';

const resolvers = {
    Query: {
        numerales: () => Numeral.findAll(),
        numeral: (_, args) => Numeral.findOne({
            where:{num_Numeral:args.numeral},
            include:
                {
                    model:Capitulo, where:{capitulo:args.capitulo}
                },
            })
    }
};

export default resolvers