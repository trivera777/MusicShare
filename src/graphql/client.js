import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://tr-apollo-musicshare.hasura.app/v1/graphql'
});

export default client;