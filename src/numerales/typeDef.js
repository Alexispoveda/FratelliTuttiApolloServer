import {gql} from "apollo-server";

const typeDef = gql`

    type Numeral {
        numeral: Int
        capitulo: Int!
        contenido: String!
    }

    extend type Query {
        numerales: [Numeral],
        numeral(numeral:Int, capitulo:Int!): Numeral
    }
`;

export default typeDef;