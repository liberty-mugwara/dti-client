import React from "react";
import Cookies from "universal-cookie";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const cookies = new Cookies();

// helpers
const isBrowser = () => typeof window !== "undefined";

export const dti = {
  // graphql client
  client: new ApolloClient({
    uri: "https://dti-graphql-api.herokuapp.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        isBrowser() ? cookies.get("dtiAccessToken") : ""
      }`,
    },
  }),

  // storing accessToken
  setAccessToken(token) {
    if (isBrowser()) cookies.set("dtiAccessToken", token, { path: "/" });
  },

  // revoking access token
  // TODO: make this method revoke an accessToken on the server
  removeAccessToken() {
    if (isBrowser()) cookies.remove("dtiAccessToken");
  },
};

const GraphqlAPIsContext = React.createContext({});

export const GraphqlAPIsProvider = ({ children }) => (
  <GraphqlAPIsContext.Provider value={dti}>
    {children}
  </GraphqlAPIsContext.Provider>
);
