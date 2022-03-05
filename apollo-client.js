import { ApolloClient, InMemoryCache } from "@apollo/client";

const API = process.env.NEXT_PUBLIC_API;

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache(),
});

export default client;
