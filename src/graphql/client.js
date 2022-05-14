import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://musicshare.hasura.app/v1/graphql'
});

export default client;