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

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
