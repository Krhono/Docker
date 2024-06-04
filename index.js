'use strict'

const { makeExecutableSchema } = require('@graphql-tools/schema');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');
const sequelize = require('./lib/sequelize');

const app = express();
const port = process.env.PORT || 3000;

const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}/api`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
