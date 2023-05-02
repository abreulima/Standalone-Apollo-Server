import { AppoloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Query {
    greering: String
  }
`;

 const resolvers = {
  Query: {
    greeting: () => 'Hello World',
  },
 };
 
 const server = new ApolloServer({typeDefs, resolvers});
 const info = await startStandaloneServer(server, { listen: { port: 9000 } });
