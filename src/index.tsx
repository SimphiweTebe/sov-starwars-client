import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient,  ApolloProvider, InMemoryCache} from '@apollo/client';

import './sass/index.scss';

import App from './components/App';

const client = new ApolloClient({
  uri: 'https://startwars-apollo-server.herokuapp.com/api',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter><App /></BrowserRouter>
  </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
