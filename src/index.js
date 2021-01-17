import { ApolloServer, gql } from 'apollo-server';
const capitulos = require('./capitulos')
const numerales = require('./numerales')

const typeDef = gql`
    type Query
`;

const server = new ApolloServer({
    typeDefs: [typeDef,capitulos.typeDef,numerales.typeDef],
    resolvers:[capitulos.resolvers,numerales.resolvers],
    engine:{
        reportSchema:true,
        variant:"current"
    }
})

server.listen({ port: process.env.PORT || 4000 }).then(({url}) => {console.log('🚀 Apollo Server listo en: '+url)})