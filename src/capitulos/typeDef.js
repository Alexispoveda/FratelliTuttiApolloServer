import { gql } from "apollo-server";

const typeDef = gql`

    type Capitulo {
        capitulo: Int!
        nombre:String!
        numerales: [Numeral]
    }

    extend type Query {
        capitulos: [Capitulo],
        capitulo(capitulo:Int!): Capitulo
    }
`;

export default typeDef