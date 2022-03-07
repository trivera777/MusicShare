import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://tr-apollo-musicshare.hasura.app/v1/graphql',
    headers: {
        "x-hasura-admin-secret":
          "BoZg6QhvkRVJ7mT3yo5eygQcrRFhmfs4vFdM7G98vRdsadWg13OS9ghJcAa7y0mTVVf"
    }
});

export default client;