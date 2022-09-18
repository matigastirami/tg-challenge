import startApolloServer from './src/app';
import { typeDefs } from './src/graphql/type-defs';
import env from './src/lib/env';
import { resolvers } from './src/resolvers';

const port = env.PORT;

export const createApolloServer = async (port: number) => await startApolloServer(port, typeDefs, resolvers);

createApolloServer(port);