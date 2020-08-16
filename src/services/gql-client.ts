import {ApolloClient, InMemoryCache} from "@apollo/client";

const token = "5fcad1da05d551989f600390b60858d38a4bea5a43c1c52461786c8a793a569f";

const gqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.blocktap.io/graphql",
  headers: {
    authorization: `Bearer ${token}`,
    "client-name": "Space Explorer [web]",
    "client-version": "1.0.0",
  },
});

export default gqlClient;
