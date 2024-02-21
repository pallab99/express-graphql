import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import connectDB from './configs/dataBase';
import app from './app';
require('dotenv').config();
const port = process.env.PORT as string;

const startServer = async (): Promise<void> => {
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app as any });

  app.listen(port, () => {
    console.log('Server Started at port ' + port);
  });
};

connectDB().then(startServer);
