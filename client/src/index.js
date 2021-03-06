import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from "./components/App";
import reducers from './reducers';
import "./sass/main.scss";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "/graphql"
});

const store = createStore(reducers);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
