import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1vfqylgj4j2d52bn.us.auth0.com"
      clientId="jx2IBf6n2hL3PLmuX4uhjWf2bVf4Gl1z"
      authorizationParams={{
        redirect_uri: "https://full-stack-application-real-estate-phi.vercel.app"
      }}
      audience= "http://localhost:8000"
      scope= "openid profile email">
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
