import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckzvra8dx2ysq01zae8lz400c/master",
  cache: new InMemoryCache(),
});

export default client;
