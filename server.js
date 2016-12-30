import express from 'express';
import { apolloServer } from 'apollo-server';
import schema from './data/schema.graphql';
import mocks frm './data/mocks';

const GRAPHQL_PORT = 8080;
const graphQLServer = express();

graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: [schema],
  mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
