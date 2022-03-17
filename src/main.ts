// import { ApolloServer } from 'apollo-server';
const express = require('express');
const { graphqlHTTP } = require('express-graphql')

import typeDefs from './schema';
import resolvers from './resolvers';

const path = require('path');
const app = express();

// const server = new ApolloServer({
//     typeDefs: typeDefs,
//     resolvers: resolvers
// });

app.use(
  '/graphql',
  graphqlHTTP({
    schema: typeDefs,
    graphiql: true,
  }),
);

app.use(express.static('public'))
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// server.applyMiddleware({ app });

// server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
// });

app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});