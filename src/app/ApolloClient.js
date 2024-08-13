import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {registerApolloClient} from "@apollo/experimental-nextjs-app-support/rsc";
import {setContext} from "@apollo/client/link/context";

export const {getClient} = registerApolloClient(() => {

  const httpLink = createHttpLink({
    uri: "https://alpha.axra.app/v1/graphql"
  });

  const authLink = setContext(async (_, {headers}) => {
    try {
      return {
        headers: {
          ...headers,
          "x-hasura-admin-secret": "alphapassword",
        },
      };
    } catch (e) {
      return {
        headers,
      };
    }
  })


  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });
});
