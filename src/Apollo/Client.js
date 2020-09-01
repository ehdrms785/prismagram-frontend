import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink, InMemoryCache } from "@apollo/client";

// export default new ApolloClient({
//   uri: authLink.concat(httpLink),
//   clientState: {
//     defaults,
//     resolvers,
//   },
// });
export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers,
  },
  // headers: {
  //   authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
  request: (operation) => {
    const token = localStorage.getItem("token");
    console.log("token : " + token);
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
});
