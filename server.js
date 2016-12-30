import express from 'express';
import { apolloServer } from 'apollo-server';
import schema from './data/schema.graphql';
import mocks frm './data/mocks';

const GRAPHQL_PORT = 8080;
const graphQLServer = express();

graphQLServer.use
