const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
require('dotenv').config();


const { PORT } = process.env
const schema = buildSchema(`
   type Query {
       welcome: String
   }
`);

const root =  {
   welcome: () => {
       return  'Welcome to my projects listing';
   }
};

const app = express();
// add graphql middleware
app.use('/api', graphqlHTTP({
    rootValue: root,
    schema,
    graphiql: true
}));

app.listen(PORT, () => console.log('server running at port: ', PORT))
