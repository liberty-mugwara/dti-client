import Cookies from "universal-cookie";
const cookies = new Cookies();

export const dti = {
  baseUrl: "https://dti-graphql-api.herokuapp.com/graphql",

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("dtiAccessToken")}`,
  },

  setAccessToken(token) {
    cookies.set("dtiAccessToken", token, { path: "/" });
  },

  // TODO: make this method revoke an accessToken on the server
  removeAccessToken() {
    cookies.remove("dtiAccessToken");
  },
};
